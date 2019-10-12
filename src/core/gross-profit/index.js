import { useState, useCallback, useEffect } from 'react';
import { dateAttribute } from '../../config/default';
import { formatFirstDayOfMonth, formatLastDayOfMonth } from './helpers';

const defaultConfig = {
  dateFormat: 'yyyy-MM-dd',
  month: 0,
  monthTo: 0,
  year: 2016,
};

const isEventValid = event => event.target && event.target.value;

const useDateFilter = (config = defaultConfig) => {
  const [month, setMonth] = useState(config.month);
  const [monthTo, setMonthTo] = useState(config.monthTo);
  const [year, setYear] = useState(config.year);

  const [monthFilter, setMonthFilter] = useState({
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute,
      },
      from: formatFirstDayOfMonth(year, month, config.dateFormat),
      to: formatLastDayOfMonth(year, monthTo, config.dateFormat),
    },
  });

  useEffect(() => {
    setMonthFilter(previous => ({
      absoluteDateFilter: {
        ...previous.absoluteDateFilter,
        from: formatFirstDayOfMonth(year, month, config.dateFormat),
        to: formatLastDayOfMonth(year, monthTo, config.dateFormat),
      },
    }));
  }, [month, year, config.dateFormat]);

  const onChange = setters => event => {
    if (isEventValid(event)) {
      const value = parseInt(event.target.value);
      if (!Number.isNaN(value)) {
        for (const setter of setters) {
          setter(value);
        }
      }
    }
  };

  const onMonthChangeCallback = useCallback(event => onChange([setMonth, setMonthTo])(event), [
    setMonth,
  ]);
  const onYearChangeCallback = useCallback(event => onChange([setYear])(event), [setYear]);

  return {
    onMonthChange: onMonthChangeCallback,
    onYearChange: onYearChangeCallback,
    monthFilter,
    year,
  };
};

export default useDateFilter;
