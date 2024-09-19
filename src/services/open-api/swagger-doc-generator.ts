import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';

import { registry } from './swagger-instance';
import env from '../../env';

export const getOpenApiDocumentation = () => {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: env.APP_NAME,
      description: 'API backend boilerplate',
    },
    servers: [{ url: '/api' }],
  });
};
