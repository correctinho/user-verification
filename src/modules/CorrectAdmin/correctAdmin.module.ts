import { Module } from '@nestjs/common';
import { FindAdminUsecase } from './usecases/find-admin.usecase';
import { CorrectAdminController } from './usecases/correct-admin.controller';

@Module({
  imports: [],
  controllers: [CorrectAdminController],
  providers: [FindAdminUsecase],
})
export class CorrectAdminModule {}
