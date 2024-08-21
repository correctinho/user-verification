import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class FindAdminUsecase {
  async execute(data: { uuid: string }) {
    console.log({ data });
    if (!data.uuid) {
      throw new UnauthorizedException();
    }
    const response = {
      uuid: '1',
      name: 'nome teste',
    };
    return {
      uuid: response.uuid,
      name: response.name,
    };
  }
}
