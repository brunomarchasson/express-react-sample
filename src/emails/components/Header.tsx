import { Section, Row, Column, Img, Text } from '@react-email/components';
import * as React from 'react';
import env from '../../env';
import { heading, tableCell } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: React.PropsWithChildren<HeaderProps>) {
  return (
    <Section>
      <Row>
        <Column>
          <Img
            src={`${env.APP_URL}/public/logo.png`}
            width="42"
            height="42"
            alt="Logo"
          />
        </Column>

        <Column align="right" style={tableCell}>
          <Text style={heading}>{title}</Text>
        </Column>
      </Row>
    </Section>
  );
}
