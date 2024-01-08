import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800"
      style={{ alignItems: "normal" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] rounded-lg mb-5 object-cover"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movies/${id}`)}
          className="w-full px-6 py-3 mt-auto font-medium text-white rounded-lg bg-primary"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
