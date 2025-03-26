// src/pages/Artist.jsx
import { useParams } from 'react-router-dom';

function Artist() {
  const { name } = useParams();

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to {name}'s Fan Club!</h2>
        <p className="lead">
          Here you'll find all the latest news and updates about {name}.
        </p>
      </div>
    </div>
  );
}

export default Artist;


