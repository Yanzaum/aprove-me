import { Module } from '@nestjs/common';
import { PayablesModule } from './integrations/payables/payables.module';
import { AssignorsModule } from './integrations/assignors/assignors.module';
import { AuthModule } from './integrations/auth/auth.module';
import { UsersModule } from './integrations/users/users.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    PayablesModule,
    AssignorsModule,
    AuthModule,
    UsersModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
})
export class AppModule {}
