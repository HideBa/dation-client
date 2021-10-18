import { API_ENDPOINT } from '@dation/constants';
import { useCallback, useEffect } from 'react';

export default () => {
  const handleFetchData = useCallback(async () => {
    if (!API_ENDPOINT) return;
    try {
      const res = await fetch(API_ENDPOINT + `/ping`);
      const resData = await res.json();
      return resData;
    } catch {
      console.error(`ERR: failed to fetch data`);
    }
  }, []);

  useEffect(() => {
    const f = async () => {
      const data = await handleFetchData();
      console.log(data);
    };
    f();
  }, []);
};
