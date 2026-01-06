
### 🧩 Code to add (full file)

```ts
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log error details for debugging

  res.status(500).json({
    message: 'Internal server error. Please try again later.',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Show error details in development
  });
};

export default errorHandler;
