import { Module } from '@nestjs/common';
import { axiosAdapter } from './adapters/axios.adapter';

@Module({
  providers: [axiosAdapter],
  exports: [axiosAdapter],
})
export class CommonModule {}
