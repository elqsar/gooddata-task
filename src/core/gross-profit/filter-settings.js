import { dateAttribute, dateAttributeInMonths, grossProfitMeasure } from '../../config/default';

export const measures = {
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
};

export const viewBy = {
  visualizationAttribute: {
    displayForm: {
      uri: dateAttributeInMonths,
    },
    localIdentifier: 'a1',
  },
};

export const allMonthFilter = {
  absoluteDateFilter: {
    dataSet: {
      uri: dateAttribute,
    },
    from: '2016-01-01',
    to: '2016-12-31',
  },
};
