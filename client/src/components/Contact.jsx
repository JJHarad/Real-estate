import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        if (!res.ok) {
          throw new Error('Failed to fetch landlord data');
        }
        const data = await res.json();
        setLandlord(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2 mt-4 overflow-y-auto max-h-[300px] p-4 border-t'> {/* Added scroll and margin */}
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='4'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-2 rounded-lg resize-none max-h-[150px] overflow-y-auto' // Reduced height, added scrolling for textarea
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=${encodeURIComponent(`Regarding ${listing.name}`)}&body=${encodeURIComponent(message)}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
            onClick={(e) => {
              if (!message.trim()) {
                e.preventDefault();
                alert('Please enter a message before sending.');
              }
            }}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
