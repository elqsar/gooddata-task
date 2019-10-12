import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';

import Select from '../components/Select';
import Option from '../components/Option';
import Header from '../components/Header';
import { MONTHS, projectId } from '../config/default';
import useColumnGraphDateFilter from '../core/gross-profit';
import { measures, viewBy, allMonthFilter } from '../core/gross-profit/helpers';

const GrossProfit = () => {
  const { monthFilter, onDateChange } = useColumnGraphDateFilter();

  const months = MONTHS.map((month, index) => {
    return <Option key={index} value={index} title={month} />;
  });

  const renderDropdown = () => {
    return <Select onchange={onDateChange}>{months}</Select>;
  };

  return (
    <div className="App">
      <Header>$ Gross Profit in month {renderDropdown()} 2016</Header>
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
