import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMyName(): object {
    return { name: 'Taifur', age: 21 };
  }
}
