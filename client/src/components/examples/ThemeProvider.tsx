import { ThemeProvider } from '../ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('light')}
          >
            <Sun className="h-4 w-4 mr-2" />
            Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('dark')}
          >
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </Button>
          <Button
            variant={theme === 'system' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('system')}
          >
            <Monitor className="h-4 w-4 mr-2" />
            System
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Current theme: {theme}
        </p>
      </CardContent>
    </Card>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background p-8">
        <h2 className="text-2xl font-bold mb-4">Theme Provider Demo</h2>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}