import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          Now playing
        </h2>

        <MovieList />
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          Top Rated
        </h2>
        <MovieList type="top_rated" />
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          Trending
        </h2>
        <MovieList type="popular" />
      </section>
    </Fragment>
  );
};

export default HomePage;
