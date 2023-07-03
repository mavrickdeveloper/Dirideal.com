import { Test, TestingModule } from '@nestjs/testing';
import { DiridealController } from './dirideal.controller';

describe('DiridealController', () => {
  let controller: DiridealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiridealController],
    }).compile();

    controller = module.get<DiridealController>(DiridealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
