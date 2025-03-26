// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const artists = ['Taylor Swift', 'Beyoncé', 'Drake','Rush','James Taylor','Wallflowers', 'Queensrÿche','Eric Clapton', ];

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Fan Club Hub</h1>
      <div className="row">
        {artists.map((artist) => (
          <div key={artist} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{artist}</h5>
                <Link to={`/artist/${artist}`} className="btn btn-primary">
                  Visit {artist}'s Fan Club
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


