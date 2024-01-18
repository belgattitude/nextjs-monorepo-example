'use client';

import { setupI18n, type AllMessages } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { PropsWithChildren } from 'react';

export function LinguiProvider({
  children,
  messages,
  locale,
}: PropsWithChildren<{ messages: AllMessages; locale: string }>) {
  return (
    <I18nProvider
      i18n={setupI18n({
        messages,
        locale,
      })}
    >
      {children}
    </I18nProvider>
  );
}
