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
      if (validateSchema) {
        try {
          validateSchema.parse(body);
          return originalJson.call(this, body);
        } catch (err) {
          if (err instanceof ZodError) {
            console.error(err);

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
