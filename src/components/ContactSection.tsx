'use client'
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building2,
  Globe,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Shield,
  Timer
} from 'lucide-react';

const offices = [
  {
    location: 'Office',
    country: 'United Arab Emirates',
    address: 'P.O Box - 126830',
    contact: {
      name: 'Mr. Syed Ibrahim Asif',
      title: 'Managing Director',
      phone: '+971 527822747',
      email: 'info@faznasolar.com'
    },
    hours: 'Monday - Saturday: 9:00 AM - 5:00 PM'
  },
  // {
  //   location: 'India Office',
  //   country: 'India',
  //   address: 'Aye Totes Pvt Ltd (Fazna Solar Energy LLC - Subsidiary)',
  //   contact: {
  //     name: 'Mr. Chittibabu Lakkum',
  //     title: 'Technical Director',
  //     phone: '+91 7981505254',
  //     email: 'cb@faznasolar.com'
  //   },
  //   hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  // }
];

const inquiryTypes = [
  'Project Inquiry',
  'Partnership Opportunity',
  'Technical Support',
  'General Information'
];

export default function ContactSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
    honeypot: '' // Hidden field for bot detection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [waitTime, setWaitTime] = useState<number | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Client-side validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // Check for suspicious patterns
    const suspiciousContent = formData.message.toLowerCase();
    if (/viagra|cialis|loan|bitcoin|crypto/.test(suspiciousContent)) {
      errors.message = 'Message contains prohibited content';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    setWaitTime(null);
    
    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not available');
      }

      const recaptchaToken = await executeRecaptcha('contact_form');
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiryType: '',
          message: '',
          honeypot: ''
        });
        setFormErrors({});
      } else if (response.status === 429) {
        setSubmitStatus('rate-limited');
        setSubmitMessage(result.error || 'Too many requests. Please wait before trying again.');
        setWaitTime(result.waitTime || null);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section data-section="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Solar Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your renewable energy project? Our team of experts is here to help you 
            achieve your sustainability goals with world-class INC solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Success/Error/Rate Limit Message */}
              {submitStatus !== 'idle' && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : submitStatus === 'rate-limited'
                    ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {submitStatus === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : submitStatus === 'rate-limited' ? (
                      <Timer className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{submitMessage}</p>
                      {waitTime && (
                        <p className="text-xs mt-1 opacity-75">
                          Please wait {waitTime} minutes before submitting again.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Notice */}
              <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800">
                  <Shield className="h-4 w-4" />
                  <p className="text-xs">
                    This form is protected by reCAPTCHA and our spam prevention system. 
                    Your privacy is protected.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => handleInputChange('honeypot', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      data-testid="input-contact-name"
                      className={formErrors.name ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      data-testid="input-contact-email"
                      className={formErrors.email ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      data-testid="input-contact-company"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+971 XX XXXXXXX"
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={formData.inquiryType === type ? "default" : "outline"}
                        className="cursor-pointer hover-elevate"
                        data-testid={`badge-inquiry-${type.toLowerCase().replace(' ', '-')}`}
                        onClick={() => handleInputChange('inquiryType', type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={5}
                    required
                    data-testid="textarea-contact-message"
                    className={formErrors.message ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-600">{formErrors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className={`w-full transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-muted cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Verifying Security...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span>Protected by reCAPTCHA v3 and advanced spam filtering</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Office Information */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{office.location}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-foreground">{office.address}</p>
                        <p className="text-muted-foreground">{office.country}</p>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{office.contact.name}</span>
                      </div>
                      <p className="text-muted-foreground text-xs mb-3">{office.contact.title}</p>
                      
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          data-testid={`button-call-${office.location.toLowerCase().replace(' ', '-')}`}
                          onClick={() => window.open(`tel:${office.contact.phone}`, '_self')}
                        >
                          <Phone className="h-3 w-3 mr-2" />
                          {office.contact.phone}
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          data-testid={`button-email-${office.location.toLowerCase().replace(' ', '-')}`}
                          onClick={() => window.open(`mailto:${office.contact.email}`, '_self')}
                        >
                          <Mail className="h-3 w-3 mr-2" />
                          {office.contact.email}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
                      <Clock className="h-3 w-3" />
                      {office.hours}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Info */}
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Quick Information
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Response Time:</span> Within 24 hours
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Languages:</span> English, Arabic, Hindi
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Service Areas:</span> UAE, Saudi Arabia, Oman, India, Qatar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}