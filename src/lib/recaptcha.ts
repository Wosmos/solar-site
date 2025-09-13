// reCAPTCHA verification utility

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY not configured');
      return { success: false, error: 'reCAPTCHA not configured' };
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return { 
        success: false, 
        error: 'reCAPTCHA verification failed' 
      };
    }

    // For reCAPTCHA v3, check the score (0.0 to 1.0, higher is better)
    const score = data.score || 0;
    const threshold = 0.5; // Adjust this threshold as needed

    if (score < threshold) {
      console.warn(`Low reCAPTCHA score: ${score}`);
      return { 
        success: false, 
        score, 
        error: 'Suspicious activity detected' 
      };
    }

    return { success: true, score };

  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { 
      success: false, 
      error: 'reCAPTCHA verification error' 
    };
  }
}