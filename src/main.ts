import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const appPort = configService.get<number>('NEST_PORT', 3001);
  const appHost = configService.get<string>('NEST_HOST', '127.0.0.1');
  
  const config = new DocumentBuilder()
  .setTitle('Smart Striga')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors({origin: '*'})
  await app.listen(appPort, appHost);

  console.log(`\n🚀 Server started and listening on: http://${appHost}:${appPort}`)
}

bootstrap()
