import theme from '../../comon/theme.json';
export const main = {
  backgroundColor: '#fff',
  fontFamily:
    "'Inter','system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'",
};

export const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
  maxWidth: '100%',
};

export const tableCell = { display: 'table-cell' };

export const heading = {
  fontSize: '32px',
  color: '#888888',
  fontWeight: 'bold',
};

export const text = {
  fontSize: '16px',
  color: '#404040',
  lineHeight: '26px',
};

export const cta = {
  backgroundColor: theme.colors.primary,
  borderRadius: '4px',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};
export const footerText = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  margin: '0',
  lineHeight: 'auto',
  marginBottom: '16px',
};

export const footerTextCenter = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  margin: '20px 0',
  lineHeight: 'auto',
  textAlign: 'center' as const,
};

export const footerLink = { color: theme.colors.primary };

export const footerIcon = { display: 'block', margin: '40px 0 0 0' };

export const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};

export const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
};
