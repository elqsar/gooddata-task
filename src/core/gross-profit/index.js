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

const useDateFilter = (config = defaultConfig) => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2016);

  const [monthFilter, setMonthFilter] = useState({
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute,
      },
      from: formatFirstDayOfMonth(year, month, config.dateFormat),
      to: formatLastDayOfMonth(year, month, config.dateFormat),
    },
  });

  useEffect(() => {
    setMonthFilter(previous => ({
      absoluteDateFilter: {
        ...previous.absoluteDateFilter,
        from: formatFirstDayOfMonth(year, month, config.dateFormat),
        to: formatLastDayOfMonth(year, month, config.dateFormat),
      },
    }));
  }, [month, year, config.dateFormat]);

  const onChange = setter => event => {
    if (isEventValid(event)) {
      const value = parseInt(event.target.value);
      if (!Number.isNaN(value)) {
        setter(value);
      }
    }
  };

  const onMonthChangeCallback = useCallback(event => onChange(setMonth)(event), [setMonth]);
  const onYearChangeCallback = useCallback(event => onChange(setYear)(event), [setYear]);

  return {
    onMonthChange: onMonthChangeCallback,
    onYearChange: onYearChangeCallback,
    monthFilter,
  };
};

export default useDateFilter;
