import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimiter, getClientIP } from '@/lib/rateLimiter';
import { verifyRecaptcha } from '@/lib/recaptcha';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, inquiryType, message, recaptchaToken, honeypot } = body;

    // Honeypot field check (hidden field that should be empty)
    if (honeypot) {
      console.log('Honeypot field filled - bot detected');
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 429 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      console.log('reCAPTCHA verification failed:', recaptchaResult.error);
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 429 }
      );
    }

    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limiting
    const rateLimitResult = rateLimiter.checkRateLimit(clientIP, email);
    if (rateLimitResult.isSpam) {
      console.log(`Rate limit exceeded: ${rateLimitResult.reason} for IP: ${clientIP}, Email: ${email}`);
      return NextResponse.json(
        { 
          error: `Too many requests. ${rateLimitResult.reason}. Please wait ${rateLimitResult.waitTime} minutes.`,
          waitTime: rateLimitResult.waitTime 
        },
        { status: 429 }
      );
    }

    // Check for spam patterns in content
    const spamDetection = rateLimiter.detectSpamPatterns({ name, email, message, company });
    if (spamDetection.isSpam) {
      console.log(`Spam pattern detected: ${spamDetection.reason} for Email: ${email}`);
      return NextResponse.json(
        { error: 'Message blocked by spam filter. Please review your content.' },
        { status: 429 }
      );
    }

    // Additional server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for minimum content requirements
    if (name.trim().length < 2 || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters and message at least 10 characters' },
        { status: 400 }
      );
    }

    // Record successful submission for rate limiting
    rateLimiter.recordSubmission(clientIP, email);

    console.log(`✅ Form submission passed all security checks - IP: ${clientIP}, Email: ${email}, reCAPTCHA Score: ${recaptchaResult.score}`);

    // Professional email template matching company branding
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; background-color: #F4F6F8; }
          .container { max-width: 600px; margin: 0 auto; background-color: #F8F9FA; }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 40px 30px; text-align: center; }
          .header h1 { color: #FFFFFF; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
          .header p { color: #E2E8F0; font-size: 16px; opacity: 0.9; }
          .content { padding: 40px 30px; }
          .greeting { color: #1E293B; font-size: 18px; font-weight: 600; margin-bottom: 20px; }
          .intro { color: #64748B; font-size: 16px; margin-bottom: 30px; line-height: 1.6; }
          .details-card { background-color: #F8F9FA; border: 1px solid #E2E8F0; border-radius: 12px; padding: 25px; margin: 25px 0; }
          .details-title { color: #1E293B; font-size: 16px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; }
          .details-title::before { content: "📋"; margin-right: 8px; }
          .detail-row { display: flex; margin-bottom: 12px; }
          .detail-label { color: #64748B; font-weight: 500; width: 120px; flex-shrink: 0; }
          .detail-value { color: #1E293B; font-weight: 400; }
          .message-section { margin-top: 25px; }
          .message-title { color: #1E293B; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; }
          .message-title::before { content: "💬"; margin-right: 8px; }
          .message-content { background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; color: #1E293B; line-height: 1.6; }
          .priority-badge { display: inline-block; background: linear-gradient(135deg, #FFA500 0%, #D97706 100%); color: #FFFFFF; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-left: 10px; }
          .footer { background-color: #F4F6F8; padding: 30px; text-align: center; border-top: 1px solid #E2E8F0; }
          .footer-title { color: #1E293B; font-size: 18px; font-weight: 600; margin-bottom: 15px; }
          .contact-info { color: #64748B; font-size: 14px; margin-bottom: 20px; }
          .footer-links { margin-top: 20px; }
          .footer-links a { color: #2563EB; text-decoration: none; margin: 0 15px; font-size: 14px; }
          .solar-accent { color: #FFA500; }
          .response-time { background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 15px; margin-top: 25px; text-align: center; }
          .response-time-text { color: #047857; font-size: 14px; font-weight: 500; }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>⚡ Fazna Solar Energy</h1>
            <p>New Contact Form Submission</p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <div class="greeting">Hello Team! 👋</div>
            <div class="intro">
              You've received a new inquiry through the Fazna Solar Energy website contact form. 
              Here are the details from the potential client:
            </div>
            
            <!-- Contact Details Card -->
            <div class="details-card">
              <div class="details-title">Contact Information</div>
              <div class="detail-row">
                <div class="detail-label">Name:</div>
                <div class="detail-value"><strong>${name}</strong></div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Email:</div>
                <div class="detail-value"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></div>
              </div>
              ${company ? `
              <div class="detail-row">
                <div class="detail-label">Company:</div>
                <div class="detail-value"><strong>${company}</strong></div>
              </div>
              ` : ''}
              ${phone ? `
              <div class="detail-row">
                <div class="detail-label">Phone:</div>
                <div class="detail-value"><a href="tel:${phone}" style="color: #2563EB; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              ${inquiryType ? `
              <div class="detail-row">
                <div class="detail-label">Inquiry Type:</div>
                <div class="detail-value"><span class="priority-badge">${inquiryType}</span></div>
              </div>
              ` : ''}
            </div>
            
            <!-- Message Section -->
            <div class="message-section">
              <div class="message-title">Message</div>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <!-- Response Time Reminder -->
            <div class="response-time">
              <div class="response-time-text">
                ⏰ Remember: Our commitment is to respond within 24 hours
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="footer-title">Fazna Solar Energy LLC</div>
            <div class="contact-info">
              Powering the future with <span class="solar-accent">sustainable energy solutions</span><br>
              P.O Box - 126830, United Arab Emirates<br>
              📧 info@faznasolar.com | 📱 +971 527822747
            </div>
            <div class="footer-links">
              <a href="mailto:${email}?subject=Re: Your inquiry about ${inquiryType || 'solar solutions'}">Reply to Customer</a> |
              <a href="tel:${phone || '+971527822747'}">Call Customer</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Fazna Solar Energy <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'info@faznasolar.com'],
      subject: `New Contact Form Submission - ${inquiryType || 'General Inquiry'}`,
      html: emailContent,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Email sent successfully', data: data.data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}