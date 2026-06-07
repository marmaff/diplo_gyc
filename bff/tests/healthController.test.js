const { getHealth } = require('../src/controllers/healthController');

describe('healthController', () => {
  it('returns health payload for bff', () => {
    const json = jest.fn();
    const res = { json };

    getHealth({}, res);

    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'ok',
        app: 'bff',
        timestamp: expect.any(String),
      }),
    );
  });
});
