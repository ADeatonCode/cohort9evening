 // Fetch artist image from Unsplash
 useEffect(() => {
  axios
    .get(`https://api.unsplash.com/search/photos`, {
      params: { query: name, client_id: unsplashApiKey },// src/pages/Artist.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Artist() {
const { name } = useParams();
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [image, setImage] = useState('');
const [songs, setSongs] = useState([]);

const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY';
const lastFmApiKey = 'YOUR_LAST_FM_API_KEY';

    })
    .then((response) => {
      if (response.data.results.length > 0) {
        setImage(response.data.results[0].urls.regular);
      }
    })
    .catch((error) => console.error('Error fetching image:', error));
}, [name, unsplashApiKey]);

// Fetch popular songs from Last.fm
useEffect(() => {
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
        setSongs(response.data.toptracks.track.slice(0, 5)); // Limit to top 5 songs
      }
    })
    .catch((error) => console.error('Error fetching songs:', error));
}, [name, lastFmApiKey]);

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
      {image && <img src={image} alt={name} className="img-fluid mt-4" />}
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
      <ul className="list-group">
        {songs.map((song, index) => (
          <li key={index} className="list-group-item">
            {song.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

export default Artist;




