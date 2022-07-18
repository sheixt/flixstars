import React from "react";
import type { FlixDetails, PromiseStatus, SelectedFlix } from "../types";
import { fetchFlix } from "../utils/api";

export default function useFlix(id: SelectedFlix) {
  const [flix, setFlix] = React.useState<FlixDetails | undefined>(undefined);
  const [status, setStatus] = React.useState<PromiseStatus>("idle");
  const [error, setError] = React.useState<unknown | undefined>();

  React.useEffect(() => {
    const loadFlix = async () => {
      if (id) {
        try {
          setStatus("loading");
          const { data, error: requestError } = await fetchFlix(id);

          if (requestError) {
            setError(requestError);
            setStatus("rejected");
          }

          if (data) {
            setFlix(data);
            setStatus("resolved");
          }
        } catch (error) {
          setError(error);
          setStatus("rejected");
        }
      }
    };

    if (id) {
      loadFlix();
    }
  }, [id]);

  return {
    flix,
    status,
    error,
  };
}
