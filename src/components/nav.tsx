import React from "react";
import ResultsList from "./results-list";
import SearchInput from "./search-input";
import useFlixSearch from "../hooks/useFlixSearch";
import { FlixType, SearchOnChange, SelectedFlix } from "../types";
import { getErrorMessage } from "../utils/misc";

export default function Nav({
  selected,
  onClick,
}: {
  selected: SelectedFlix;
  onClick: React.Dispatch<React.SetStateAction<SelectedFlix>>;
}) {
  const [search, setSearch] = React.useState<string>("");
  const [filter, setFiler] = React.useState<FlixType>("movie");
  const [page, setPage] = React.useState<number>(1);
  const {
    flixList,
    status,
    meta: { total },
    error,
  } = useFlixSearch({ title: search, type: filter, page });
  const errorMessage = error ? getErrorMessage(error) : "";
  const nextPage = React.useMemo(
    () => (total > Number(flixList?.length) ? Number(flixList?.length) / 10 + page : 1),
    [flixList?.length, page, total]
  );

  const onChange: SearchOnChange = {
    search: (v) => setSearch(v),
    filter: (v) => setFiler(v),
  };

  return (
    <>
      <SearchInput value={{ search, filter }} onChange={onChange} error={errorMessage} />
      <ResultsList
        flix={flixList}
        status={status}
        prev={page > 1 ? () => setPage(page - 1) : undefined}
        next={nextPage > page ? () => setPage(nextPage) : undefined}
        onClick={(v) => onClick(v.imdbID)}
        selected={selected}
      />
    </>
  );
}
