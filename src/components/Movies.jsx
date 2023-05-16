import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';

function Movies() {
  const url = `https://swapi.dev/api/films`;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovie = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, );

  return (
    <>
      <Header />
      {loading ? (
        <div>Page is loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="card">
          {data.map((film) => (
            <div className="card-item" key={film.episode_id}>
              <div>
                <h3>{film.title}</h3>
                <p>{film.release_date}</p>
              </div>
              <div>
                <p>{`${film.opening_crawl.substring(1, 200)}...`}</p>
              </div>
              <div>
                <hr />
              </div>
              <div>
                <Link to={`/more-info/${film.episode_id}`}>More info</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Movies;
