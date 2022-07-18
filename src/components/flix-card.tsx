import React from "react";
import { Flix, SelectedFlix } from "../types";
import { flixPoster } from "../utils/misc";

export default function FlixCard({
  flix,
  onClick,
  selected,
}: {
  flix: Flix;
  onClick: (flix: Flix) => void;
  selected: SelectedFlix;
}) {
  const styles =
    "group relative bg-slate-900 duration-300 transition-shadow rounded-lg w-56 flex flex-col overflow-hidden shadow-sm hover:shadow-indigo-500/20 focus:shadow-indigo-500/20 hover:shadow-xl focus:shadow-xl hover:opacity-100 focus:opacity-100 transition-opacity ";
  return (
    <button
      type="button"
      key={flix.imdbID}
      className={
        selected
          ? selected === flix.imdbID
            ? styles + "shadow-xl shadow-indigo-500/20"
            : styles + "opacity-50"
          : styles
      }
      onClick={() => onClick(flix)}
    >
      <div className="aspect-w-3 aspect-h-4 bg-black h-64 w-full overflow-hidden">
        <img
          src={flixPoster(flix.Poster)}
          alt={flix.Title}
          className="w-full h-full object-center object-cover group-hover:scale-110 group-focus:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col text-left">
        <h3 className="text-sm font-medium text-slate-300 line-clamp-2 h-10">{flix.Title}</h3>
        <p className="text-sm italic text-slate-500">{flix.Year}</p>
      </div>
    </button>
  );
}
