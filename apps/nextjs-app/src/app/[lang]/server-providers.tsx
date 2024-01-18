'use server';

import { setupI18n } from '@/lib/i18n/utils';

import { ClientProviders } from './client-providers';

interface ProvidersProps {
  children?: React.ReactNode;
  lang: string;
}

export async function ServerProviders({ children, lang }: ProvidersProps) {
  const i18nSetupData = await setupI18n({ locale: lang });

  return (
    <ClientProviders i18nSetupData={i18nSetupData}>{children}</ClientProviders>
  );
}
