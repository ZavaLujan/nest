import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './config/app.config';
import { joiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: true, // Make the configuration global
      load: [envConfig], // Load the configuration
      validationSchema: joiValidationSchema, // Validate the configuration
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemonsdb',
    }),

    PokemonModule,

    CommonModule,

    SeedModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
