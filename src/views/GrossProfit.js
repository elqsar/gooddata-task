import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';
import styled from 'styled-components';

import Select from '../components/Select';
import Option from '../components/Option';
import Header from '../components/Header';
import { MONTHS, YEARS, projectId } from '../config/default';
import useDateFilter from '../core/gross-profit';
import { measures, viewBy } from '../core/gross-profit/filter-settings';

const ChartContainer = styled.div`
  height: 40vh;
  width: 80vw;
`;

const defaultMonth = '0';
const defaultYear = '2016';

const GrossProfit = () => {
  const { monthFilter, onMonthChange, onYearChange } = useDateFilter();
  const { monthFilter: allYearsFilter, onYearChange: onAllYearChange } = useDateFilter({
    dateFormat: 'yyyy-MM-dd',
    year: 2016,
    month: 0,
    monthTo: 12,
  });

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

  const change = event => {
    onYearChange(event);
    onAllYearChange(event);
  };

  const renderYearDropdown = () => {
    return (
      <Select defaulValue={defaultYear} onchange={change}>
        {years}
      </Select>
    );
  };

  return (
    <div>
      <Header>
        $ Gross Profit in month {renderMonthDropdown()} {renderYearDropdown()}
      </Header>
      <ChartContainer>
        <ColumnChart measures={[measures]} filters={[monthFilter]} projectId={projectId} />
      </ChartContainer>
      <Header>$ Gross Profit - All months</Header>
      <ChartContainer>
        <ColumnChart
          measures={[measures]}
          filters={[allYearsFilter]}
          viewBy={viewBy}
          projectId={projectId}
        />
      </ChartContainer>
    </div>
  );
};

export default GrossProfit;
