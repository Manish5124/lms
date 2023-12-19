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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/books/all");
        console.log("home up response =>", response);
        const res = response.data.results;
        console.log("res =>", res);
      } catch (error) {
        console.error("Axios error:", error);
      }
    };
  
    // Adding a setTimeout to simulate an asynchronous operation
    setTimeout(() => {
      fetchData();
    }, 0);
  }, []);
  

  const styles = {
    card: {
      display: 'flex',
      margin: '20px',
      maxWidth: '1350px', // Adjust the maximum width as needed
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
      fontSize: '5rem'
    },
  };

 
  const book= {
    "title": "At the Bake Shop",
    "title_search": "At the Bake Shop",
    "page_count": 4,
    "series_name": "Collection 2",
    "min_age": 4,
    "max_age": 8,
    "book_type": null,
    "language": "english",
    "authors": [
        "Daffodil Hill Press"
    ],
    "subcategories": null,
    "categories": "Hobbies, Sports & Outdoors; Fiction, Non-fiction & Poetry; Animals, Bugs & Pets",
    "summary": "Taylor feels more at home at Wildwood Stables than she does anywhere else. But she still has so much to learn"
}

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
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" style={styles.lineSpacing}>
          <b>Series: </b>{book.series_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          <b>Authors:</b> {book.authors}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          <b>Suggested age:</b> {book.min_age} - {book.max_age}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          <b>Page Count:</b> {book.page_count}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles.lineSpacing}>
          <b>Categories:</b> {book.categories}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
         <b> Summary: </b>{book.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon style={styles.redIcon} />
        </IconButton>
      </CardActions>
    </Card>



    </div>
  );
}

export default Home;
