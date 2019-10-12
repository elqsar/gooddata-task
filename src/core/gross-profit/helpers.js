import { format, lastDayOfMonth } from 'date-fns';

export const formatLastDayOfMonth = (year, month, formatPattern) => {
  return format(lastDayOfMonth(new Date(year, month)), formatPattern);
};

export const formatFirstDayOfMonth = (year, month, formatPattern) => {
  return format(new Date(year, month), formatPattern);
};
