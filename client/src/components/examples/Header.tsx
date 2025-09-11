import { useState } from 'react';
import Header from '../Header';

export default function HeaderExample() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className="min-h-screen">
      <Header 
        onThemeToggle={() => setIsDark(!isDark)} 
        isDark={isDark} 
      />
      <div className="p-8">
        <h2 className="text-2xl font-bold">Header Component Demo</h2>
        <p className="text-muted-foreground mt-2">
          The header includes navigation, theme toggle, and mobile menu functionality.
        </p>
      </div>
    </div>
  );
}