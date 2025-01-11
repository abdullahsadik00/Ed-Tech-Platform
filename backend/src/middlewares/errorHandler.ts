import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/CustomError';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      hasError: true,
      message: err.message,
      errors: err.errors,
    });
  }
  return res.status(500).json({
    hasError: true,
    message: 'Internal Server Error',
    errors: [],
  });
};
