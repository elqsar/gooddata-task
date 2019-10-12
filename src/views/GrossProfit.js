import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';

import Select from '../components/Select';
import Option from '../components/Option';
import Header from '../components/Header';
import { MONTHS, YEARS, projectId } from '../config/default';
import useDateFilter from '../core/gross-profit';
import { measures, viewBy, allMonthFilter } from '../core/gross-profit/filter-settings';

const defaultMonth = '1';
const defaultYear = '2016';

const GrossProfit = () => {
  const { monthFilter, onMonthChange, onYearChange } = useDateFilter();

  const months = MONTHS.map((month, index) => {
    return <Option key={index} value={index} title={month} />;
  });

  const years = YEARS.map((year, index) => {
    return <Option key={index} value={year} title={year} />;
  });

  const renderMonthDropdown = () => {
    return (
      <Select defaultValue={defaultMonth} onchange={onMonthChange}>
        {months}
      </Select>
    );
  };

  const renderYearDropdown = () => {
    return (
      <Select defaulValue={defaultYear} onchange={onYearChange}>
        {years}
      </Select>
    );
  };

  return (
    <div className="App">
      <Header>
        $ Gross Profit in month {renderMonthDropdown()} {renderYearDropdown()}
      </Header>
      <div>
        <ColumnChart measures={[measures]} filters={[monthFilter]} projectId={projectId} />
      </div>
      <Header>$ Gross Profit - All months</Header>
      <div>
        <ColumnChart
          measures={[measures]}
          filters={[allMonthFilter]}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfit;
