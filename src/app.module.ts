import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TenantInfoOrm } from './orms/tenant-info.orm';
import { OrganisationUnitOrm } from './orms/organisation-unit.orm';
import { OrganisationUnitTypeOrm } from './orms/organisation-unit-type.orm';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [
            TenantInfoOrm,
            OrganisationUnitOrm,
            OrganisationUnitTypeOrm,
          ],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    ClientsModule.register([
      { name: 'ORGANISATION_SERVICE', transport: Transport.TCP },
    ]),
    TypeOrmModule.forFeature([
      TenantInfoOrm,
      OrganisationUnitOrm,
      OrganisationUnitTypeOrm,
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
