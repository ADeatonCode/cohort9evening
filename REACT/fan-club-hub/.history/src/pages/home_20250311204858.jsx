// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const artists = ['Taylor Swift', 'Beyoncé', 'Drake','Rush','James Taylor','Wallflowers', 'Queensrÿche','Eric Clapton', 'Stevie Ray Vaughan', 'George Strait', 'Lady Antebellum','Fleetwood Mac','Heart', '3 Doors Down', 'Daughtry','Crosby Stills and Nash','Neal Young','Extreme','Corrs','Scorpions','38 Special', 'Aerosmith','Black Crows','Queens of the Stone Age','Styx','Boston','REO Speedwagon'
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


