import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'monorail.proxy.rlwy.net',
        port: 38690,
        password: 'ZxHmlUAmWUXTwbSqocnBWhZZtQcNiavV',
        username: 'root',
        database: 'railway',
        entities: [User],
        synchronize: true
        
      }
    ),
    UsersModule],
})
export class AppModule {}
