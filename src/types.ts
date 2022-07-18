export type PromiseStatus = "idle" | "loading" | "resolved" | "rejected";

export type SearchQuery = string | undefined;

export type SearchOnChange = {
  search: (value: string) => any;
  filter: (value: FlixType) => any;
};

export type SearchParamsObj = { [key: string]: string | number | boolean };

export type Flix = {
  Title: string;
  imdbID: string;
  Year: string;
  Ratings?: FlixRating[] | [];
  Plot?: string;
  Poster?: string;
  [x: string]: any;
};

export interface FlixRating {
  Source: string;
  Value: string;
}

export type FlixType = "movie" | "series" | "episode";

export type FlixSearchArgs = {
  title: SearchQuery;
  type: FlixType;
  page?: number;
};

export type SelectedFlix = Flix["imdbID"] | undefined;

export type FlixDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<FlixRating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
