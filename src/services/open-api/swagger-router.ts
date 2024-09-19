import { NextFunction, Request, Response, Router } from 'express';
import { AnyZodObject, ZodSchema } from 'zod';
import { inputValidator as validateInput } from './middleware/validate-zod-schema.middleware';
import { responseInterceptor as validateOutput } from './middleware/response-Interseptor.middleware';
import { bearerAuth, registry } from './swagger-instance';
import {
  camelCaseToTitleCase,
  parseRouteString,
  routeToClassName,
} from './api.utils';
import { canAccess } from '../../modules/auth/middleware/can-access.middleware';
import {
  errorResponseSchema,
  successResponseSchema,
} from '../../modules/common/common.schema';

type Method =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'options'
  | 'trace';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDontKnow = unknown | never | any;

export type RequestAny = Request<IDontKnow, IDontKnow, IDontKnow, IDontKnow>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResponseAny = Response<IDontKnow, Record<string, any>>;

export type SwaggerRouterPathType = `/${string}`;
export type MaybePromise = void | Promise<void>;
export type ValidationsSchemaType = {
  params?: AnyZodObject;
  query?: AnyZodObject;
  body?: AnyZodObject;
  response?: ZodSchema;
};
export type SwaggerRouterMiddleware = (
  req: RequestAny,
  res: ResponseAny,
  next?: NextFunction,
) => MaybePromise;

export type SwaggerRouterRoutePType = [
  path: SwaggerRouterPathType,
  validations: ValidationsSchemaType,
  ...handlers: SwaggerRouterMiddleware[],
];

export class SwaggerRouterRouter {
  private router: Router;
  private rootRoute: string;

  constructor(rootRoute: string) {
    this.router = Router();
    this.rootRoute = rootRoute;
  }

  public get(...args: SwaggerRouterRoutePType) {
    return this.routeHandler('get', ...args);
  }

  public post(...args: SwaggerRouterRoutePType) {
    return this.routeHandler('post', ...args);
  }

  public delete(...args: SwaggerRouterRoutePType) {
    return this.routeHandler('delete', ...args);
  }

  public patch(...args: SwaggerRouterRoutePType) {
    return this.routeHandler('patch', ...args);
  }

  public put(...args: SwaggerRouterRoutePType) {
    return this.routeHandler('put', ...args);
  }

  public use(...args: Parameters<Router['use']>): void {
    this.router.use(...args);
  }

  private getPath(path: string) {
    return this.rootRoute + parseRouteString(path);
  }

  private registerRoute(
    method: Method,
    path: SwaggerRouterPathType,
    validations: ValidationsSchemaType,
    hasSecurity: boolean,
    title: string,
  ) {
    const className = routeToClassName(this.rootRoute);
    const bodyType = validations?.body;
    const paramsType = validations?.params;
    const queryType = validations?.query;
    const responseType = validations.response ?? successResponseSchema;

    registry.registerPath({
      method: method,
      tags: [className],
      path: this.getPath(path),
      security: hasSecurity ? [{ [bearerAuth.name]: ['bearer'] }] : [],
      description: title,
      summary: title,
      request: {
        params: paramsType,
        query: queryType,
        ...(bodyType
          ? {
              body: {
                content: {
                  'application/json': {
                    schema: bodyType,
                  },
                },
              },
            }
          : {}),
      },
      responses: {
        200: {
          description: '',
          content: {
            'application/json': {
              schema: responseType,
            },
          },
        },
        400: {
          description: 'API Error Response',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
        404: {
          description: 'API Error Response',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
        500: {
          description: 'API Error Response',
          content: {
            'application/json': {
              schema: errorResponseSchema,
            },
          },
        },
      },
    });
  }
  private wrapper(
    method: Method,
    path: SwaggerRouterPathType,
    validations: ValidationsSchemaType,
    ...middlewares: Array<SwaggerRouterMiddleware>
  ): void {
    //generate ApiDoc
    this.registerRoute(
      method,
      path,
      validations,
      middlewares.some((m) => m.name === canAccess().name),
      camelCaseToTitleCase(middlewares[middlewares.length - 1]?.name),
    );
    const controller = middlewares[middlewares.length - 1];
    middlewares.pop();

    this.router[method](
      path,
      ...middlewares,
      validateInput(validations),
      validateOutput({ validation: validations?.response }),
      controller,
    );
  }

  private routeHandler(method: Method, ...args: SwaggerRouterRoutePType) {
    const [path, reqAndRes, ...handlers] = args;
    return this.wrapper(method, path, reqAndRes, ...handlers);
  }

  // Method to get the router instance
  public getRouter(): Router {
    return this.router;
  }
}

export default SwaggerRouterRouter;
