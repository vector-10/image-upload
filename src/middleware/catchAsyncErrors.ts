import { Request, Response, NextFunction } from 'express';

const asyncMiddleware = (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next))
      .catch(next);
  };
};

export default asyncMiddleware;
