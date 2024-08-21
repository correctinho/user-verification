/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FindAdminUsecase } from './find-admin.usecase';

@Controller()
export class CorrectAdminController {
  constructor(private readonly findAdminUsecase: FindAdminUsecase) {}
  @GrpcMethod('CorrectAdminService', 'FindCorrectAdmin')
  async findCorrectAdmin(data: { uuid: string }) {
    return await this.findAdminUsecase.execute(data);
  }
}
