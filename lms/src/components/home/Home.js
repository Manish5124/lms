import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Home() {
  const [data, setData] = useState(null);

  const styles = {
    card: {
      display: 'flex',
      margin: '20px',
      maxWidth: '1250px', // Adjust the maximum width as needed
    },
    media: {
      width: '20%', // Adjust the image width as needed
      // objectFit: 'cover',
    },
    content: {
      width: '80%',
      textAlign: 'left',
      padding: '16px', // Adjust the padding as needed
    },
    lineSpacing: {
      marginBottom: '10px', // Adjust the spacing between lines as needed
    },
    redIcon: {
      color: 'red',
    },
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://books39.p.rapidapi.com/CZFA4F/books',
  //       params: {
  //         series: 'Wings of fire',
  //         book_type: 'Fiction',
  //         lexile_min: '600',
  //         lexile_max: '800',
  //         results_per_page: '25',
  //         page: '1'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '0453ebbe58msh9e1a33b721be434p1175c3jsn90031e9855fe',
  //         'X-RapidAPI-Host': 'books39.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setData(response.data); // Set the data in the component state
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //       // Handle error if needed
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* {data !== null ? (
        <div> */}
          {/* Render your data here */}
          {/* {data.map(book => (
            <div key={book.id}>
              <h3>{book.TITLE}</h3>
              <p>ISBN: {book.ISBN}</p>
              <p>Language: {book.LANG}</p>
              <p>Year: {book.YEAR}</p> */}
              {/* Add more details as needed */}
            {/* </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )} */}

<Card style={styles.card}>
      <CardMedia
        component="img"
        alt="Book Cover"
        height="auto"
        image="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg" // Replace with the actual path to your image
        style={styles.media}
      />
      <CardContent style={styles.content}>
        <Typography variant="h5" component="div" style={styles.lineSpacing}>
          Learning to Fly
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" style={styles.lineSpacing}>
          Series: Wildwood Stables
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          Authors: Suzanne Weyn
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          Suggested age: 8 - 11
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          Lexile: 800
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          Page Count: 176
        </Typography>
        <Typography variant="body1" paragraph>
          Summary:
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Taylor feels more at home at Wildwood Stables than she does anywhere else. But she still has so much to learn!
          So when Daphne offers to teach her English-style riding, Taylor can't wait to get started. But will her horse,
          Prince Albert, be as excited to try something new? Especially if it means competition--and jumping?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={styles.redIcon}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>



    </div>
  );
}

export default Home;
