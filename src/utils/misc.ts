import { Flix, SearchParamsObj } from "../types";

export function objToSearchParams(obj: SearchParamsObj) {
  const searchParams = new URLSearchParams();
  Object.keys(obj).forEach((key) => {
    searchParams.append(key, String(obj[key]));
  });
  return searchParams;
}

export function debounce(fn: Function, ms = 300, immediate = false) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function executedFunction(this: any, ...args: any[]) {
    let context = this;

    let later = function () {
      timeout = undefined;
      if (!immediate) fn.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, ms);

    if (callNow) fn.apply(context, args);
  };
}

export function flixPoster(poster: Flix["Poster"]) {
  return poster === "N/A"
    ? "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    : poster;
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
