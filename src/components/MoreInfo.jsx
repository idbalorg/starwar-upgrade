import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function MoreInfo() {
  const { movieId } = useParams();
  const url = `https://swapi.dev/api/films/${movieId}`;
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(url);
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId, url]);
  console.log(details)

  return (
    <>
      {loading ? (
        <div>Page is loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : details ? (
        <div>
          <h2>{details.title}</h2>
          <p>Director: {details.director}</p>
          <p>Producer: {details.producer}</p>
          {/* Render other movie details as needed */}
        </div>
      ) : null}
    </>
  );
}

export default MoreInfo;
