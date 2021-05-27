import { NextSeo } from 'next-seo';
import { HeroSection } from '../features/home/sections/hero-section';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';

export default function Home() {
  return (
    <>
      <NextSeo
        title="[web-app] nextjs-monorepo example"
        description="See https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner />
        <HeroSection />
      </MainLayout>
    </>
  );
}
