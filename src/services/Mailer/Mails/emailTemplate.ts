import path from 'node:path';
import fs from 'node:fs';
// import { fileURLToPath } from 'node:url';
import mjml2html from 'mjml';
import Handlebars from 'handlebars';

// TRY IT LIVE : https://mjml.io/try-it-live/
// const __filename: string = fileURLToPath(import.meta.url);
// const __dirname: string = path.dirname(__filename);

Handlebars.registerHelper('breaklines', (t: string) => {
  let text = Handlebars.Utils.escapeExpression(t);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br />');
  return new Handlebars.SafeString(text);
});

export interface TemplateVars {
  projectName?: string;
  projectDescription?: string;
  subject?: string;
  text?: string;
  action_name?: string;
  afterText?: string;
  action_url?: string;
}

export interface Theme {
  bgColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  round: string;
}

export const TemplateEmail = (vars: TemplateVars, theme: Theme) => {
  const templatePath: string = path.resolve(__dirname, './template.mjml');
  const mjmlTemplate: string = fs.readFileSync(templatePath, 'utf8');
  const template = Handlebars.compile(mjmlTemplate);
  const mjml: string = template({
    vars,
    theme,
  });

  const h = mjml2html(mjml).html;
  return h;
};

export default TemplateEmail;
