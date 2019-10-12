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

export const allMonthFilter = year => ({
  absoluteDateFilter: {
    dataSet: {
      uri: dateAttribute,
    },
    from: `${year}-01-01`,
    to: `${year}-12-31`,
  },
});
