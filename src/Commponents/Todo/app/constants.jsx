export const FILTER_STATUSES = {
    ALL: "all",
    COMPLEATED: "compleated",
    ACTIVE: "active",
  };
  
 export const filterOptions = [
    {id: 'ALL', value: FILTER_STATUSES.ALL, label: 'Все', isChecked: 'checked' },
    {id: 'ACTIVE', value: FILTER_STATUSES.ACTIVE, label: 'Активные', isChecked: '' },
    {id: 'COMPLEATED', value: FILTER_STATUSES.COMPLEATED, label: 'Завершенные', isChecked: '' },
  ];
