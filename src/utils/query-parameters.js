export const parseQueryParameters = parametersMap =>
  !parametersMap.size
    ? ''
    : `?${Object.entries(Object.fromEntries(parametersMap))
        .map(([key, value]) => {
          const parsedValue = Array.isArray(value) ? value.join(',') : value;

          return typeof value === 'undefined' ? key : `${key}=${parsedValue}`;
        })
        .join('&')}`;
