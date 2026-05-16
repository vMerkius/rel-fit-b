import { AppController } from './app.controller'
import { AppModule } from './app.module'
import { AppService } from './app.service'

describe('AppModule', () => {
  it('should be defined', () => {
    expect(AppModule).toBeDefined()
  })

  it('should register the application controller and service', () => {
    const controllers = Reflect.getMetadata(
      'controllers',
      AppModule,
    ) as unknown[]
    const providers = Reflect.getMetadata('providers', AppModule) as unknown[]

    expect(controllers).toContain(AppController)
    expect(providers).toContain(AppService)
  })
})
