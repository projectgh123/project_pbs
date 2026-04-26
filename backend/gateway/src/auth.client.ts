import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const AuthClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 4001,
  },
});