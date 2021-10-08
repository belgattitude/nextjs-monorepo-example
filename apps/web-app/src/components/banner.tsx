import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';

type Props = {
  children?: never;
};

export const Banner: React.FC<Props> = () => {
  const [brand, setBrand] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <div>
          <a href=".">
            <img
              src={'/images/logo.png'}
              alt="logo"
              style={{ width: '500px' }}
            />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <b style={{ color: '#FF774A', fontSize: '20px' }}>
            Looking for an agency for your project?
          </b>
        </div>
        <div style={{ padding: '32px' }}>
          <Button
            style={{
              margin: '16px',
              backgroundColor: 'rgba(255, 119, 74, 0.2)',
              color: '#FF774A',
              border: 'None',
            }}
            onClick={() => {
              window.location.href = 'https://www.sortlist.com/apply';
            }}
            variant="outlined">
            I'm an agency
          </Button>
          <Button
            style={{
              margin: '16px',
              backgroundColor: '#FF774A',
              color: '#FFFFFF',
            }}
            variant="contained"
            onClick={() => {
              window.location.href = 'https://www.sortlist.com/project/new';
            }}>
            Post a project
          </Button>
        </div>
      </div>
    </div>
  );
};
