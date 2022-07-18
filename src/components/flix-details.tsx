import React from "react";
import { StarIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import { SelectedFlix } from "../types";
import useFlix from "../hooks/useFlix";
import { flixPoster } from "../utils/misc";

export default function FlixDetail({ id }: { id: SelectedFlix }) {
  const { flix } = useFlix(id);

  if (!flix) {
    return null;
  }

  const rating = flix?.Ratings.find((rating) => rating.Source === "Rotten Tomatoes");

  const { Title, Poster, Genre } = flix;

  const meta = {
    Year: flix.Year,
    Rated: flix.Rated,
    Runtime: flix.Runtime,
    Released: flix.Released,
  };

  const credits = {
    Director: flix.Director,
    Writer: flix.Writer,
    Actors: flix.Actors,
    Production: flix.Production,
  };

  return (
    <article className="bg-slate-900 min-h-full">
      <header className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={flixPoster(Poster)} alt={Title} />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {Title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-500">{Genre}</p>
        </div>
      </header>
      <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:gap-y-0 lg:gap-x-8">
          <div className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 text-white inline-flex gap-2 items-center bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                <div>
                  <StarIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <div className="text-2xl font-semibold">{rating?.Value}</div>
              </div>
              <div className="lg:absolute mt-6 lg:mt-0 top-0 right-0 mr-6 md:mr-8 p-5 inline-flex gap-2 items-center text-indigo-400 bg-slate-800 rounded-xl shadow-lg transform -translate-y-1/2">
                <div>
                  <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="text-2xl font-semibold">{flix.BoxOffice}</div>
              </div>
              <ul className="mt-6 max-w-3xl text-xl text-gray-300 grid grid-cols-1 lg:grid-cols-2">
                {Object.entries(meta).map(([key, value]) => (
                  <li className="flex" key={`meta-${key}`}>
                    <span className="mr-2 text-indigo-600">{key}:</span>
                    <span className="font-bold text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {flix.Plot ? (
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8 text-slate-700">
                {flix.Plot === "N/A" ? null : flix.Plot}
                {flix.Awards === "N/A" ? null : (
                  <>
                    <hr className="my-6" />
                    {flix.Awards}
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-y-4 mt-14">
          {Object.entries(credits).map(([key, value]) => (
            <li key={`credits-${key}`}>
              <span className="mr-2 text-lg leading-6 font-medium text-indigo-400">{key}:</span>
              <span className="text-base text-slate-300">{value}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
