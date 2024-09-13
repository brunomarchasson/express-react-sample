import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from '@react-email/components';
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { container, main } from './styles';

interface TemplateProps {
  preview: string;
  title: string;
}

export function Template({
  preview,
  title,
  children,
}: React.PropsWithChildren<TemplateProps>) {
  return (
    <Html>
      <Head>
        {/* <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwkT9nA2.woff2",
            format: "woff2",
          }}
        /> */}
      </Head>
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Header title={title}></Header>
          <Section>{children}</Section>
          <Footer></Footer>
        </Container>
      </Body>
    </Html>
  );
}
