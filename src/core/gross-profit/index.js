import { useState, useCallback, useEffect } from 'react';
import { dateAttribute } from '../../config/default';
import { formatFirstDayOfMonth, formatLastDayOfMonth } from './helpers';

const defaultConfig = {
  dateFormat: 'yyyy-MM-dd',
  defaultDateFrom: '2016-01-01',
  defaultDateTo: '2016-01-31',
  defaultYear: 2016,
};

const isEventValid = event => event.target && event.target.value;

const isMonthRangeValid = event => event.target.value >= 0 && event.target.value <= 11;

const useColumnGraphDateFilter = (config = defaultConfig) => {
  const [dateFrom, setDateFrom] = useState(config.defaultDateFrom);
  const [dateTo, setDateTo] = useState(config.defaultDateTo);
  const [monthFilter, setMonthFilter] = useState({
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute,
      },
      from: dateFrom,
      to: dateTo,
    },
  });

  useEffect(() => {
    setMonthFilter(previous => ({
      absoluteDateFilter: {
        ...previous.absoluteDateFilter,
        from: dateFrom,
        to: dateTo,
      },
    }));
  }, [dateFrom, dateTo]);

  const onMonthChange = event => {
    if (isEventValid(event) && isMonthRangeValid(event)) {
      const monthNumber = event.target.value;
      setDateFrom(formatFirstDayOfMonth(config.defaultYear, monthNumber, config.dateFormat));
      setDateTo(formatLastDayOfMonth(config.defaultYear, monthNumber, config.dateFormat));
    }
  };

  const onDateChangeCallback = useCallback(event => onMonthChange(event), [dateTo, dateFrom]);

  return {
    onMonthChange: onDateChangeCallback,
    monthFilter,
  };
};

export default useColumnGraphDateFilter;