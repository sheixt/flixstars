import type { Flix, FlixSearchArgs, SearchParamsObj } from "../types";
import { objToSearchParams } from "./misc";

const OMDB_API_KEY = "da0bfa12";
const baseUrl = "http://www.omdbapi.com/";

function omdbRequest({
  path = "",
  params,
  ...options
}: {
  path?: string;
  params?: SearchParamsObj;
} & RequestInit) {
  const searchParams = params ? objToSearchParams(params).toString() : undefined;
  const url = `${baseUrl}${path}${searchParams ? `?${searchParams}` : ""}`;

  return new Request(url, options);
}

export async function fetchFlixList({ title, type = "movie", page = 1 }: FlixSearchArgs) {
  try {
    const response = await fetch(
      omdbRequest({ params: { apiKey: OMDB_API_KEY, s: title ?? "", type, page } })
    );
    const { Search: data, totalResults: total }: { Search: Array<Flix>; totalResults: number } =
      await response.json();

    return { data, total };
  } catch (error) {
    return { data: [] as Array<Flix>, total: 0, error };
  }
}

export async function fetchFlix(id: Flix["imdbID"]) {
  try {
    const response = await fetch(
      omdbRequest({ params: { apiKey: OMDB_API_KEY, i: id, plot: "full" } })
    );
    const data = await response.json();

    return { data };
  } catch (error) {
    return { data: null, error };
  }
}
