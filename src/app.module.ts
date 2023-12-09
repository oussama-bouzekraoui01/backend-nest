import { Module } from '@nestjs/common';
import {ProjectModule} from "./project/project.module";
import {PrismaModule} from "./prisma/prisma.module";


@Module({
  imports: [ProjectModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
