import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import logger from 'src/common/logger/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    logger.info(`Request... Method: ${req.method}, URL: ${req.url}`);
    next();
  }
}
