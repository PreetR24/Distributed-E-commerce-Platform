import { Request, Response } from 'express';
export declare const healthController: (serviceName: string) => {
    health: (_req: Request, res: Response) => Response<any, Record<string, any>>;
    live: (_req: Request, res: Response) => Response<any, Record<string, any>>;
    ready: (_req: Request, res: Response) => Response<any, Record<string, any>>;
};
