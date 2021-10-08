import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { CollectionPageJsonLd, NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { AgenciesBlock } from '../blocks/agencies-block';
import { CtaBlock } from '../blocks/cta-block';
import { FeaturesBlock } from '../blocks/features-block';
import { HeroBlock } from '../blocks/hero-block';
import { homeConfig } from '../home.config';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { fetchLongtailSummary } from '@/features/home/api/fetch-longtail-summary';
import { AgenciesRealBlock } from '@/features/home/blocks/agencies-real-block';
type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  const [brand, setBrand] = useState('');
  const [location, setLocation] = useState('');
  const agencies = [
    '87Seconds',
    'Thisisatest',
    'Capital Panache',
    'WiBiecome',
    'La super boite',
    'Else Bang',
    'Cluj sl test',
  ];
  const summaryData = fetchLongtailSummary({
    locationSlug: 'Brussels',
  }).data;

  return (
    <>
      <NextSeo
        title={`Best agencies in ${summaryData.city}`}
        description={`Best agencies in ${summaryData.city}`}></NextSeo>
      <MainLayout>
        <Banner element={(<div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <b style={{ color: '#FF774A', fontSize: '20px' }}>
            Looking for an agency for your project?
          </b>
        </div>)}/>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <h1
            style={{
              fontSize: '112px',
              fontFamily: 'Anton',
              fontStyle: 'Regular',
              textAlign: 'center',
            }}>
            Trust the octopus
          </h1>
          <h2 style={{ width: '50%', textAlign: 'center', fontSize: '24px' }}>
            Looking for an agency for your project? Better ask Jack. Its 8
            spectacular tentacles allow it to scan more than 30,000 agencies -
            worldwide- less than 2 seconds and propose.
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '32px',
              alignItems: 'center',
            }}>
            <div style={{ minWidth: '100px', margin: '16px' }}>
              <FormControl
                fullWidth
                style={{ backgroundColor: '#FF774A', borderRadius: '8px' }}>
                <InputLabel id="brand-select-label">Brand</InputLabel>
                <Select
                  labelId="brand-select-label"
                  id="brand-select"
                  value={brand}
                  label="Brand"
                  onChange={(e) => setBrand(e.target.value)}>
                  <MenuItem value={10}>SEO</MenuItem>
                  <MenuItem value={20}>Pub</MenuItem>
                  <MenuItem value={30}>Beer</MenuItem>
                </Select>
              </FormControl>
            </div>
            <span>Best agencies</span>
            <div style={{ minWidth: '140px', margin: '16px' }}>
              <FormControl fullWidth style={{ backgroundColor: '#FF774A' }}>
                <InputLabel id="location-select-label">Arround me</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
                  value={location}
                  label="Arround me"
                  onChange={(e) => setLocation(e.target.value)}>
                  <MenuItem value={10}>Brussels</MenuItem>
                  <MenuItem value={20}>Paris</MenuItem>
                  <MenuItem value={30}>Romania</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('/images/octopus.png')`,
              width: '1004px',
              height: '534px',
              margin: '32px',
            }}></div>
          <div>
            <div
              style={{
                width: '1000px',
                backgroundColor: '#123297',
                borderRadius: '16px',
                display: 'flex',
              }}>
              <img src="/images/testicles.png" alt="" />
              <div style={{ padding: '32px' }}>
                <b style={{ fontSize: '32px', color: '#FFFFFF' }}>
                  2 seconds to scan 100 000 agencies
                </b>
                <h3 style={{ color: '#FFFFFF', fontWeight: '200' }}>
                  Insane, isn't ? Jack is the largest, globally distributed
                  marketplace of top business, design, and technology agencies,
                  ready to tackle your most important initiatives. He will guide
                  you to them and maybe help you get in touch with them if you
                  ask for.
                </h3>
              </div>
            </div>
          </div>
          <div style={{ margin: '64px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                padding: '32px',
                textAlign: 'center',
                color: '#123297',
              }}>
              They trusted Jack
            </h2>
            <div style={{ display: 'flex' }}>
              <a
                href="https://www.adobe.com"
                target={'_blank'}
                rel="noreferrer">
                <img src="/images/adobe.png" alt="adobe" />
              </a>
              <a
                href="https://www.amazon.com"
                target={'_blank'}
                rel="noreferrer">
                <img src="/images/amazon.png" alt="amazon" />
              </a>
              <a href="https://www.bbc.com" target={'_blank'} rel="noreferrer">
                <img src="/images/bbc.png" alt="bbc" />
              </a>
              <a
                href="https://www.blizzard.com"
                target={'_blank'}
                rel="noreferrer">
                <img src="/images/blizzard.png" alt="blizzard" />
              </a>
            </div>
          </div>
          <div
            style={{
              padding: '64px',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              flexDirection: 'column',
            }}>
            <h2 style={{ fontSize: '32px', marginLeft: '64px' }}>
              Previous Winners
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginLeft: '64px',
              }}>
              <div style={{ width: '33%' }}>
                {agencies.map((name) => (
                  <>
                    <a
                      href="https://www.sortlist.com/agency/87seconds"
                      style={{
                        display: 'block',
                        flexDirection: 'row',
                        margin: '32px',
                      }}>
                      <img src="/images/agencylogo.png" alt="" />
                      <span>{name}</span>
                    </a>
                  </>
                ))}
              </div>
              <div style={{ width: '33%' }}>
                {agencies.map((name) => (
                  <>
                    <a
                      href="https://www.sortlist.com/agency/87seconds"
                      style={{
                        display: 'block',
                        flexDirection: 'row',
                        margin: '32px',
                      }}>
                      <img src="/images/agencylogo.png" alt="" />
                      <span>{name}</span>
                    </a>
                  </>
                ))}
              </div>
              <div style={{ width: '33%' }}>
                {agencies.map((name) => (
                  <>
                    <a
                      href="https://www.sortlist.com/agency/87seconds"
                      style={{
                        display: 'block',
                        flexDirection: 'row',
                        margin: '32px',
                      }}>
                      <img src="/images/agencylogo.png" alt="" />
                      <span>{name}</span>
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: 'url(/images/footerSplash.png)',
              backgroundPositionX: 'right',
              width: '100%',
              height: '600px',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'flex-end',
            }}>
            <div style={{ display: 'flex' }}>
              <a href="." style={{ padding: '16px' }}>
                <img src="/images/octologobot.png" alt="bot"></img>
              </a>
              <h2
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                2021 © Octopicks | All rights reserved
              </h2>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
