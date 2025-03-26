// src/pages/Artist.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Artist() {
  const { name } = useParams();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a form submission and showing a message
    setMessage(`Thank you for joining ${name}'s Fan Club, ${email}!`);
    setEmail(''); // Reset email input field
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to {name}'s Fan Club!</h2>
        <p className="lead">
          Here you'll find all the latest news and updates about {name}.
        </p>
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
    </div>
  );
}

export default Artist;



