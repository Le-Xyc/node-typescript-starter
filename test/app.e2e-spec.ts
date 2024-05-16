import { main, WELCOME_MESSAGE } from '../src/main';

describe('Test main (e2e)', () => {
  let logSpy: jest.SpyInstance;

  beforeAll(async () => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  it(`main logs ${WELCOME_MESSAGE}`, () => {
    main();
    expect(logSpy).toHaveBeenCalledWith(WELCOME_MESSAGE);
  });

  afterAll(() => {
    logSpy.mockRestore();
  });
});
