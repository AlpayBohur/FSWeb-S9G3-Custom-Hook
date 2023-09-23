import axios from "axios";
import { useState } from "react";

export const useAxios = (type, url, params) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios[type](url, params)
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  return [data, err, loading, getData];
};
