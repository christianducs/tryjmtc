import { useState, useEffect, useCallback } from "react";

export default function useStats({ url = "/mock/stats.json" } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const base = import.meta.env.VITE_API_URL ?? "";
      const endpoint = base ? `${base.replace(/\/$/, "")}/stats` : url;
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { data, loading, error, refresh: fetchStats };
}
