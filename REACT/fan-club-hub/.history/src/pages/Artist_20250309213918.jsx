// src/pages/Artist.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Artist() {
  const { name } = useParams();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingSongs, setLoadingSongs] = useState(true);
  const [error, setError] = useState('');

  const unsplashApiKey = 'YQ4pZ6yHZJvh40VRj9Dxj2IPQC5tMohcVb34lGOVn-kM';
  const unspashS = '5p9PdqCrOXMafWRPoz_cFO5sxGtZC8-uVSCswGo1mEQ';
  const lastFmApiKey = '0447213284e7a8e7555d1cd4eb47f2a5';
  const lastFmShared = '35716806a88b2cc220cc78118574c959'
  // Fetch artist image
  useEffect(() => {
    setLoadingImage(true);
    setError('');
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: { query: name, client_id: unsplashApiKey },
      })
      .then((response) => {
        if (response.data.results.length > 0) {
          setImage(response.data.results[0].urls.regular);
        } else {
          setError('No image found for this artist.');
        }
      })
      .catch(() => setError('Error fetching image from Unsplash.'))
      .finally(() => setLoadingImage(false));
  }, [name, unsplashApiKey]);

  // Fetch songs and load favorites from localStorage
  useEffect(() => {
    setLoadingSongs(true);
    setError('');
    axios
      .get(`https://ws.audioscrobbler.com/2.0/`, {
        params: {
          method: 'artist.gettoptracks',
          artist: name,
          api_key: lastFmApiKey,
          format: 'json',
        },
      })
      .then((response) => {
        if (response.data.toptracks && response.data.toptracks.track) {
          setSongs(response.data.toptracks.track.slice(0, 5));
        }
      })
      .catch(() => setError('Error fetching songs from Last.fm.'))
      .finally(() => setLoadingSongs(false));
      
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, [name, lastFmApiKey]);

  // Handle favorite toggle
  const toggleFavorite = (songName) => {
    const updatedFavorites = favorites.includes(songName)
      ? favorites.filter((fav) => fav !== songName)
      : [...favorites, songName];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you for joining ${name}'s Fan Club, ${email}!`);
    setEmail('');
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to {name}'s Fan Club!</h2>
        <p className="lead">
          Here you'll find all the latest news and updates about {name}.
        </p>

        {loadingImage ? (
          <div className="spinner-border mt-4" role="status">
            <span className="visually-hidden">Loading image...</span>
          </div>
        ) : image ? (
          <img src={image} alt={name} className="img-fluid mt-4" />
        ) : (
          <div className="alert alert-warning mt-4">{error}</div>
        )}
      </div>

      <div className="mt-4">
        <h3>Join the Fan Club</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Join Now</button>
        </form>
        {message && <div className="alert alert-success mt-3">{message}</div>}
      </div>

      <div className="mt-5">
        <h3>Top Songs by {name}</h3>
        {loadingSongs ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading songs...</span>
          </div>
        ) : songs.length > 0 ? (
          <ul className="list-group">
            {songs.map((song, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {song.name}
                <button
                  onClick={() => toggleFavorite(song.name)}
                  className={`btn ${favorites.includes(song.name) ? 'btn-danger' : 'btn-outline-primary'}`}
                >
                  {favorites.includes(song.name) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-warning">{error}</div>
        )}
      </div>
    </div>
  );
}

export default Artist;

