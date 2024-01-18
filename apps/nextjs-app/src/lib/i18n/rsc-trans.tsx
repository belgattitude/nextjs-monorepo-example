'use server';

import { TransNoContext, type TransProps } from '@lingui/react/server';
import { cookies } from 'next/headers';

import { getI18n, setupI18n } from './utils';

export async function Trans(props: TransProps) {
  let i18n = getI18n();

  if (!i18n) {
    const cookiesList = cookies();
    const localeCookie = cookiesList.get('NEXT_LOCALE');

    const lang = localeCookie?.value ?? 'en';

    await setupI18n({ locale: lang });

    i18n = getI18n();
  }

  if (!i18n) {
    throw new Error('i18n not initialized');
  }

  return <TransNoContext {...props} lingui={{ i18n }} />;
}
