'use client'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function RecaptchaTest() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const testRecaptcha = async () => {
    if (!executeRecaptcha) {
      setTestResult('❌ reCAPTCHA not loaded');
      return;
    }

    setIsLoading(true);
    try {
      const token = await executeRecaptcha('test');
      
      // Test the server verification
      const response = await fetch('/api/test-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTestResult(`✅ reCAPTCHA Working! Score: ${result.score?.toFixed(2)} (${result.score > 0.5 ? 'Human' : 'Suspicious'})`);
      } else {
        setTestResult(`❌ reCAPTCHA Failed: ${result.error}`);
      }
    } catch (error) {
      setTestResult(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-muted/30">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        reCAPTCHA Test Panel
      </h3>
      
      <Button 
        onClick={testRecaptcha} 
        disabled={isLoading}
        className="mb-4"
      >
        {isLoading ? 'Testing...' : 'Test reCAPTCHA'}
      </Button>
      
      {testResult && (
        <div className={`p-3 rounded border ${
          testResult.includes('✅') 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-center gap-2">
            {testResult.includes('✅') ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span className="font-mono text-sm">{testResult}</span>
          </div>
        </div>
      )}
      
      <p className="text-xs text-muted-foreground mt-4">
        💡 reCAPTCHA v3 is invisible - no checkbox needed! It analyzes user behavior in the background.
      </p>
    </div>
  );
}