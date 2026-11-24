const mockGetAll = jest.fn();

jest.mock('genericsuite', () => ({
  errorAndReenter: {
    formatCaughtError: jest.fn(),
    getErrorDetail: jest.fn(),
  },
  dbService: {
    dbApiService: jest.fn().mockImplementation(() => ({
      getAll: (...args: any[]) => mockGetAll(...args),
    })),
  },
  genericEditorUtilities: {
    defaultValue: (obj: any, key: string, def: any = null) =>
      typeof obj[key] === 'undefined' ? def : obj[key],
  },
  loggingService: { console_debug_log: jest.fn() },
}));

import { sendMessageToBot } from './chatbot.db.operations.jsx';

// Run with TZ=America/Bogota and TZ=Asia/Tokyo.
describe('sendMessageToBot client_date', () => {
  beforeEach(() => {
    mockGetAll.mockReset();
    mockGetAll.mockResolvedValue({ resultset: {} });
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  const send = async () => {
    await sendMessageToBot('hi', { currentConversationId: 'c1' }, jest.fn());
    // getAll(query, body, method, options)
    return mockGetAll.mock.calls[0][1];
  };

  it('adds the browser LOCAL date (21:00 case) and keeps the other fields', async () => {
    jest.setSystemTime(new Date(2026, 2, 15, 21, 0, 0));
    const body = await send();
    expect(body.client_date).toBe('2026-03-15');
    expect(body.cid).toBe('c1');
    expect(JSON.parse(body.conversation)).toEqual([
      { role: 'user', content: 'hi' },
    ]);
    expect(Object.keys(body).sort()).toEqual(['cid', 'client_date', 'conversation']);
  });

  it('adds the browser LOCAL date (08:00 case)', async () => {
    jest.setSystemTime(new Date(2026, 2, 15, 8, 0, 0));
    const body = await send();
    expect(body.client_date).toBe('2026-03-15');
  });
});
