import { Module } from '@nestjs/common';
import { CategoriesController } from 'src/controllers/categories.controller';
import { CategoriesService } from '../services/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
