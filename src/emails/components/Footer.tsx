import {
  Section,
  Row,
  Column,
  Img,
  Text,
  // Link,
} from '@react-email/components';
import * as React from 'react';
import env from '../../env';
import {
  footerCopyright,
  footerIcon,
  // footerLink,
  // footerLinksWrapper,
} from './styles';

export function Footer() {
  return (
    <>
      <Section>
        <Row>
          <Column align="center" style={footerIcon}>
            <Img
              src={`${env.APP_URL}/public/logo.png`}
              width="26"
              height="26"
              alt="Logo"
            />
          </Column>
        </Row>
      </Section>
      {/* <Text style={footerLinksWrapper}>
        <Link style = {footerLink}href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary?mt=8">
          Account Settings
        </Link>{' '}
        •{' '}
        <Link style = {footerLink}href="https://www.apple.com/legal/itunes/us/sales.html">
          Terms of Sale
        </Link>{' '}
        •{' '}
        <Link style = {footerLink}href="https://www.apple.com/legal/privacy/">Privacy Policy </Link>
      </Text> */}
      <Text style={footerCopyright}>
        Copyright © 2024 Acme.
        {/* <br />       <Link style = {footerLink}href="https://www.apple.com/legal/">All rights reserved</Link> */}
      </Text>
    </>
  );
}
