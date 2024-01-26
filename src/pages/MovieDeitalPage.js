import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../config";

const MovieDeitalPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    fetcher
  );
  console.log(data);
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDeitalPage;
