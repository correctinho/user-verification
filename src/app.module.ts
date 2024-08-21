import { Module } from '@nestjs/common';
import { CorrectAdminModule } from './modules/CorrectAdmin/correctAdmin.module';

@Module({
  imports: [CorrectAdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
