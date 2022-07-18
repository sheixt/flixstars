import React from "react";
import type { Flix, FlixSearchArgs, PromiseStatus } from "../types";
import { fetchFlixList } from "../utils/api";

export default function useFlixSearch({ title, type = "movie", page }: FlixSearchArgs) {
  const [flixList, setFlixList] = React.useState<Array<Flix>>([]);
  const [status, setStatus] = React.useState<PromiseStatus>("idle");
  const [total, setTotal] = React.useState<number>(0);
  const [error, setError] = React.useState<unknown | undefined>();

  React.useEffect(() => {
    const loadFlixList = async () => {
      try {
        setError(undefined);
        setStatus("loading");
        const { data, total, error: requestError } = await fetchFlixList({ title, type, page });

        if (requestError) {
          setError(requestError);
          setStatus("rejected");
        }

        if (data) {
          setFlixList(data);
          setTotal(total);
          setStatus("resolved");
        }
      } catch (error) {
        setError(error);
        setStatus("rejected");
      }
    };

    if (Number(title?.length) > 2) {
      loadFlixList();
    }
  }, [page, title, type]);

  React.useEffect(() => {
    if (status === "resolved" && title?.length === 0) {
      setFlixList([]);
      setStatus("idle");
    }
  }, [status, title?.length]);

  return {
    query: title,
    filter: type,
    flixList,
    meta: {
      page,
      total,
    },
    status,
    error,
  };
}
