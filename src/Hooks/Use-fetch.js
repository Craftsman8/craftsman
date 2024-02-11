import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [components, setComponents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error('Ooooooooopss! ...unable to connect to the server. >>>Check your internet connection and try again!');
          }
          return response.json();
        })
        .then((item) => {
          setComponents(item);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);

  return { components, loading, error };
};

export default useFetch;
