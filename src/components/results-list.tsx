import React from "react";
import { Flix, PromiseStatus, SelectedFlix } from "../types";
import FlixCard from "./flix-card";

export default function ResultsList({
  status,
  flix,
  next,
  prev,
  onClick,
  selected,
}: {
  status: PromiseStatus;
  flix: Array<Flix>;
  prev?: () => void;
  next?: () => void;
  onClick: (flix: Flix) => void;
  selected: SelectedFlix;
}) {
  if (status === "loading") {
    return <p className=" px-4 lg:px-8 pb-8 text-sm text-slate-500">Loading...</p>;
  }

  if (status === "resolved") {
    if (flix.length === 0) {
      return (
        <p className=" px-4 lg:px-8 pb-8 text-sm text-slate-500">
          No results found. Please try another search.
        </p>
      );
    } else {
      return (
        <div className="w-full overflow-hidden">
          <ul className="flex overflow-x-scroll pt-4 lg:pt-8 pb-8 pl-4 lg:pl-8">
            {flix.map((flix) => (
              <li key={flix.imdbID} className="mr-4 lg:mr-6">
                <FlixCard flix={flix} onClick={onClick} selected={selected} />
              </li>
            ))}
          </ul>
          {prev || next ? (
            <div className="relative z-0 inline-flex shadow-sm rounded-md px-4 lg:px-8">
              <button
                type="button"
                className={
                  !prev
                    ? "relative inline-flex items-center px-4 py-2 rounded-l-md border border-slate-700 bg-slate-900 text-sm font-medium text-slate-500 opacity-50"
                    : "relative inline-flex items-center px-4 py-2 rounded-l-md border border-slate-700 bg-slate-900 text-sm font-medium text-slate-500 hover:bg-indigo-600 hover:text-white transition-colors focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                }
                onClick={prev}
                disabled={!prev}
              >
                Previous 10
              </button>
              <button
                type="button"
                className={
                  !next
                    ? "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-slate-700 bg-slate-900 text-sm font-medium text-slate-500 opacity-50"
                    : "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-slate-700 bg-slate-900 text-sm font-medium text-slate-500 hover:bg-indigo-600 hover:text-white transition-colors focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                }
                onClick={next}
                disabled={!next}
              >
                Next 10
              </button>
            </div>
          ) : null}
        </div>
      );
    }
  }

  return null;
}
