import { useState, useEffect } from 'react';

const GoogleFitSteps = ({ authToken }) => {
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from your Google Fit API route
  const fetchGoogleFitData = async () => {
    try {
      const res = await fetch(`/api/googlefit?authToken=${authToken}`);
      const data = await res.json();

      if (res.ok) {
        setSteps(data.steps);
      } else {
        setError(data.error || 'Something went wrong');
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch Google Fit data');
      setLoading(false);
    }
  };

  // Trigger fetch when the component mounts or the authToken changes
  useEffect(() => {
    if (authToken) {
      fetchGoogleFitData();
    }
  }, [authToken]);

  return (
    <div>
      <h1>Google Fit Steps</h1>
      {loading && <p>Loading steps...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {steps !== null && !loading && !error && (
        <div>
          <h2>Total Steps: {steps}</h2>
          <p>Keep up the great work!</p>
        </div>
      )}
    </div>
  );
};

export default GoogleFitSteps;
