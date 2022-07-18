import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { FlixType, SearchOnChange } from "../types";
import { debounce } from "../utils/misc";

export default function SearchInput({
  error,
  onChange,
  value = {
    search: "",
    filter: "movie",
  },
}: {
  error?: string;
  onChange: SearchOnChange;
  value?: {
    search: string;
    filter: FlixType;
  };
}) {
  const [search, setSearch] = React.useState(value?.search ?? "");

  const debouncedSearch = React.useMemo(
    () => debounce((v: string) => onChange.search(v)),
    [onChange]
  );

  const handleSearch = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value);
      debouncedSearch(e.currentTarget.value);
    },
    [debouncedSearch]
  );

  const styles = error
    ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
    : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

  return (
    <div className="p-4 lg:p-8">
      <label htmlFor="search" className="block text-sm font-medium text-slate-400">
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="search"
          name="search"
          id="search"
          className={styles}
          placeholder="e.g. Batman"
          aria-invalid="true"
          aria-describedby="email-error"
          onChange={handleSearch}
          value={search}
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Filter
          </label>
          <select
            id="filter"
            name="filter"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            onChange={(e) => onChange.filter(e.target.value as FlixType)}
            value={value.filter}
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
        {error ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      {Number(value.search.length) < 3 ? (
        <p className="mt-2 text-sm text-slate-500">
          We need {3 - Number(value.search.length)} more characters to start searching
        </p>
      ) : null}
      {error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          There was a problem; {error}
        </p>
      ) : null}
    </div>
  );
}
