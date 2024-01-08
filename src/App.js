import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/scss";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDeitalPage from "./pages/MovieDeitalPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDeitalPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
