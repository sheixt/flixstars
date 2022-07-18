import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import FlixDetail from "./components/flix-details";
import Nav from "./components/nav";
import { SelectedFlix } from "./types";

export default function App() {
  const [flix, setFlix] = React.useState<SelectedFlix>();

  return (
    <>
      <div className="bg-slate-800 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120 shadow-2xl">
        <div className="relative z-10 mx-auto md:max-w-2xl lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-700 w-full">
          <header className="p-4 lg:p-8">
            <Logo className="w-24 lg:w-52 lg:mb-14 mx-auto" />
          </header>
          <Nav onClick={setFlix} selected={flix} />
        </div>
      </div>

      <main className="border-t border-slate-600 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="relative">
          <FlixDetail id={flix} />
        </div>
      </main>
    </>
  );
}
