import { useState, useMemo } from 'react';
import { Alert } from 'react-native';
import { identity } from 'ramda';
import { parseQueryParameters } from '../utils/query-parameters';
import { API_CMC_KEY, API_MESSARI_KEY } from '../config';

const DEFAULT_HEADERS = {
  Accepts: 'application/json',
  'X-CMC_PRO_API_KEY': API_CMC_KEY,
  'x-messari-api-key': API_MESSARI_KEY,
};

class Fetch {
  constructor(url) {
    this.url = url;
    this.method = 'GET';
    this.queryParameters = new Map();
  }

  setUrl(url) {
    this.url = url;

    return this;
  }

  setMethod(method) {
    this.method = method;

    return this;
  }

  addQueryParameter(key, value) {
    this.queryParameters.set(key, value);

    return this;
  }

  run() {
    return fetch(`${this.url}${parseQueryParameters(this.queryParameters)}`, {
      method: this.method,
      headers: DEFAULT_HEADERS,
    })
      .then(response => response.json())
      .catch(error =>
        Alert.alert(`Error with data fetching: ${error.message}`),
      );
  }
}

export const useFetch = (dataSelector = identity) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchBuilder = useMemo(() => new Fetch(), []);
  const selectedData = useMemo(() => dataSelector(data), [dataSelector, data]);

  const handleOnFetch = () => {
    setLoading(true);

    return fetchBuilder
      .run()
      .then(setData)
      .finally(() => setLoading(false));
  };

  return {
    loading,
    fetchBuilder,
    data: selectedData,
    onFetch: handleOnFetch,
  };
};
