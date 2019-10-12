import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';

import Select from '../components/Select';
import Option from '../components/Option';
import Header from '../components/Header';
import {
  dateAttribute,
  dateAttributeInMonths,
  grossProfitMeasure,
  MONTHS,
  projectId,
} from '../config/default';

const GrossProfit = () => {
  const getMonthFilter = () => {
    return {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute,
        },
        from: '2016-01-01',
        to: '2016-01-31',
      },
    };
  };

  const getMeasures = () => {
    return [
      {
        measure: {
          localIdentifier: 'm2',
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure,
              },
            },
          },
          alias: '$ Gross Profit',
        },
      },
    ];
  };

  const getViewBy = () => {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: dateAttributeInMonths,
        },
        localIdentifier: 'a1',
      },
    };
  };

  const renderDropdown = () => {
    return (
      <Select defaultValue="0" onchange={event => console.log('Event', event.target.value)}>
        {MONTHS.map((month, index) => {
          return <Option key={index} value={index} title={month} />;
        })}
      </Select>
    );
  };

  const filters = [getMonthFilter()];
  const byMonthFilter = [
    {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute,
        },
        from: '2016-01-01',
        to: '2016-12-31',
      },
    },
  ];
  const measures = getMeasures();
  const viewBy = getViewBy();

  return (
    <div className="App">
      <Header>$ Gross Profit in month {renderDropdown()} 2016</Header>
      <div>
        <ColumnChart measures={measures} filters={filters} projectId={projectId} />
      </div>
      <Header>$ Gross Profit - All months</Header>
      <div>
        <ColumnChart
          measures={measures}
          filters={byMonthFilter}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfit;
