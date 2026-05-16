import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { bootstrap } from './main'

describe('bootstrap', () => {
  const originalPort = process.env.PORT

  afterEach(() => {
    process.env.PORT = originalPort
    jest.restoreAllMocks()
  })

  it('listens on the default port when PORT is not set', async () => {
    delete process.env.PORT

    const listen = jest.fn().mockResolvedValue(undefined)
    const create = jest
      .spyOn(NestFactory, 'create')
      .mockResolvedValue({ listen } as never)

    await bootstrap()

    expect(create).toHaveBeenCalledWith(AppModule)
    expect(listen).toHaveBeenCalledWith(3000)
  })

  it('listens on the configured port when PORT is set', async () => {
    process.env.PORT = '4000'

    const listen = jest.fn().mockResolvedValue(undefined)
    const create = jest
      .spyOn(NestFactory, 'create')
      .mockResolvedValue({ listen } as never)

    await bootstrap()

    expect(create).toHaveBeenCalledWith(AppModule)
    expect(listen).toHaveBeenCalledWith('4000')
  })
})
