import { Button, Html } from '@react-email/components';
import * as React from 'react';
import theme from '../app/styles/theme.json';

export default function Email({ url }) {
  return (
    <Html>
      <Button
        href={url}
        style={{
          background: theme.colors.primary,
          color: '#fff',
          padding: '12px 20px',
        }}
      >
        Click me
      </Button>
    </Html>
  );
}
