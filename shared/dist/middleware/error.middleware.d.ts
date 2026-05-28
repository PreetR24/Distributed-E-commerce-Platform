import { Request, Response, NextFunction } from 'express';
export declare const globalErrorHandler: (error: any, req: Request, res: Response, _next: NextFunction) => Response<any, Record<string, any>>;
