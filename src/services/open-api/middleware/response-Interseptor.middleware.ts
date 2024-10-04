import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodSchema } from 'zod';

type options = {
  validation?: ZodSchema;
};

export const responseInterceptor =
  (options: options) => (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;
    const validateSchema = options?.validation;
    // Override the json function
    res.json = function (body: Record<string, unknown>) {
      if (validateSchema && res.statusCode < 300) {
        try {
          const p = validateSchema.parse(body);
          return originalJson.call(this, p);
        } catch (err) {
          console.log('zerze');
          if (err instanceof ZodError) {
            console.error(err);
            res.status(500);
            return originalJson.call(this, {
              success: false,
              message: 'Response Validation Error - Server Error',
              data: err.errors,
            });
          }
        }
      }
      return originalJson.call(this, body);
    };

    next?.();
  };
