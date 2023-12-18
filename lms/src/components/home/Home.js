import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://books39.p.rapidapi.com/CZFA4F/books',
        params: {
          series: 'Wings of fire',
          book_type: 'Fiction',
          lexile_min: '600',
          lexile_max: '800',
          results_per_page: '25',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '0453ebbe58msh9e1a33b721be434p1175c3jsn90031e9855fe',
          'X-RapidAPI-Host': 'books39.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data); // Set the data in the component state
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error if needed
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div>
      <h1>Home</h1>
      {data !== null ? (
        <div>
          {/* Render your data here */}
          {data.map(book => (
            <div key={book.id}>
              <h3>{book.TITLE}</h3>
              <p>ISBN: {book.ISBN}</p>
              <p>Language: {book.LANG}</p>
              <p>Year: {book.YEAR}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
