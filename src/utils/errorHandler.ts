import { Request, Response, NextFunction } from 'express';
import { request } from 'http';

const errorHandler = ( err: Error, req: Response,res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An Error Occured during operation'})
}

export default errorHandler;