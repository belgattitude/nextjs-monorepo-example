'use client';

import { ThemeProvider } from 'next-themes';

import { LinguiProvider } from '@/lib/i18n/lingui-provider';

interface ClientProvidersProps {
  children?: React.ReactNode;
  i18nSetupData: {
    locale: string;
    messages: Record<string, unknown>;
  };
}

export function ClientProviders({
  children,
  i18nSetupData,
}: ClientProvidersProps) {
  return (
    <LinguiProvider {...i18nSetupData}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LinguiProvider>
  );
}
