import { formatFirstDayOfMonth, formatLastDayOfMonth } from './helpers';

test('Date format test', () => {
  const lastDay = formatLastDayOfMonth(2019, 0, 'yyyy-MM-dd');
  expect(lastDay).toEqual('2019-01-31');

  const firstDay = formatFirstDayOfMonth(2019, 1, 'yyyy-MM-dd');
  expect(firstDay).toEqual('2019-02-01');
});
