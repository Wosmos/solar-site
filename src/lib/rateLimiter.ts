// Rate limiting utility for spam protection
// Tracks email submissions per IP and email address

interface RateLimitEntry {
  count: number;
  resetTime: number;
  lastSubmission: number;
}

interface SpamDetection {
  isSpam: boolean;
  reason?: string;
  waitTime?: number;
}

class RateLimiter {
  private ipLimits = new Map<string, RateLimitEntry>();
  private emailLimits = new Map<string, RateLimitEntry>();
  private readonly MAX_REQUESTS_PER_HOUR = 3;
  private readonly HOUR_IN_MS = 60 * 60 * 1000;
  private readonly MIN_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes between submissions

  // Clean up expired entries periodically
  private cleanup() {
    const now = Date.now();
    
    for (const [key, entry] of this.ipLimits.entries()) {
      if (now > entry.resetTime) {
        this.ipLimits.delete(key);
      }
    }
    
    for (const [key, entry] of this.emailLimits.entries()) {
      if (now > entry.resetTime) {
        this.emailLimits.delete(key);
      }
    }
  }

  checkRateLimit(ip: string, email: string): SpamDetection {
    this.cleanup();
    const now = Date.now();

    // Check IP-based rate limiting
    const ipEntry = this.ipLimits.get(ip);
    if (ipEntry) {
      if (now < ipEntry.resetTime) {
        if (ipEntry.count >= this.MAX_REQUESTS_PER_HOUR) {
          const waitTime = Math.ceil((ipEntry.resetTime - now) / 1000 / 60);
          return {
            isSpam: true,
            reason: 'IP rate limit exceeded',
            waitTime
          };
        }
        
        // Check minimum interval between submissions
        if (now - ipEntry.lastSubmission < this.MIN_INTERVAL_MS) {
          const waitTime = Math.ceil((this.MIN_INTERVAL_MS - (now - ipEntry.lastSubmission)) / 1000 / 60);
          return {
            isSpam: true,
            reason: 'Too frequent submissions',
            waitTime
          };
        }
      }
    }

    // Check email-based rate limiting
    const emailEntry = this.emailLimits.get(email.toLowerCase());
    if (emailEntry) {
      if (now < emailEntry.resetTime && emailEntry.count >= this.MAX_REQUESTS_PER_HOUR) {
        const waitTime = Math.ceil((emailEntry.resetTime - now) / 1000 / 60);
        return {
          isSpam: true,
          reason: 'Email rate limit exceeded',
          waitTime
        };
      }
    }

    return { isSpam: false };
  }

  recordSubmission(ip: string, email: string) {
    const now = Date.now();
    const resetTime = now + this.HOUR_IN_MS;

    // Record IP submission
    const ipEntry = this.ipLimits.get(ip);
    if (ipEntry && now < ipEntry.resetTime) {
      ipEntry.count++;
      ipEntry.lastSubmission = now;
    } else {
      this.ipLimits.set(ip, {
        count: 1,
        resetTime,
        lastSubmission: now
      });
    }

    // Record email submission
    const emailKey = email.toLowerCase();
    const emailEntry = this.emailLimits.get(emailKey);
    if (emailEntry && now < emailEntry.resetTime) {
      emailEntry.count++;
    } else {
      this.emailLimits.set(emailKey, {
        count: 1,
        resetTime,
        lastSubmission: now
      });
    }
  }

  // Additional spam detection patterns
  detectSpamPatterns(formData: any): SpamDetection {
    const { name, email, message, company } = formData;

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /viagra|cialis|loan|bitcoin|crypto|investment|forex/i,
      /click here|visit now|limited time|act now/i,
      /\$\$\$|money|cash|prize|winner|congratulations/i
    ];

    const allText = `${name} ${email} ${message} ${company || ''}`.toLowerCase();
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allText)) {
        return {
          isSpam: true,
          reason: 'Suspicious content detected'
        };
      }
    }

    // Check for excessive URLs
    const urlPattern = /https?:\/\/[^\s]+/gi;
    const urls = allText.match(urlPattern) || [];
    if (urls.length > 2) {
      return {
        isSpam: true,
        reason: 'Too many links detected'
      };
    }

    // Check for repeated characters (spam pattern)
    if (/(.)\1{4,}/.test(allText)) {
      return {
        isSpam: true,
        reason: 'Spam pattern detected'
      };
    }

    // Check message length (too short might be spam)
    if (message.trim().length < 10) {
      return {
        isSpam: true,
        reason: 'Message too short'
      };
    }

    // Check for all caps (spam pattern)
    if (message.length > 20 && message === message.toUpperCase()) {
      return {
        isSpam: true,
        reason: 'All caps message detected'
      };
    }

    return { isSpam: false };
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();

// Helper function to get client IP
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  return 'unknown';
}