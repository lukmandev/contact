import { Module } from "@nestjs/common";
import AdminBro from 'admin-bro';
import { Database, Resource } from '@admin-bro/sequelize';
import { AdminModule } from '@admin-bro/nestjs';
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { SequelizeModule } from "@nestjs/sequelize";

import { AuthModule } from './auth/auth.module';
import { User } from "./models/user";


AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: `.${process.env.NODE_ENV}.env`
    // }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: "localhost",
    //   port: 5432,
    //   username: "postgres",
    //   password: "",
    //   database: "education-app",
    //   models: [User],
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
