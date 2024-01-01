import React, { useContext, useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AppContext from '../../context/AppContext';
import IsFavoriteBookCom from './IsFavoriteBookCom';


function Books() {
      const {books,
        setFavBooks,
        setDeleteFavBook,
        deleteFavBookData,
        isFavoriteBook,
        } = useContext(AppContext);
      const [favorites, setFavorites] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const [matchesFound, setMatchesFound] = useState(true);
  
    const styles = {
      mainContainer:{
        marginTop: '12px'
      },
      card: {
        display: 'flex',
        marginLeft: '12px',
        marginRight: '12px',
        maxWidth: '80%', 
        marginBottom:'9px'
      },
      media: {
        width: '20%', 
       },
      content: {
        width: '80%',
        textAlign: 'left',
        padding: '16px', 
      },
      lineSpacing: {
        marginBottom: '5px', 
      },
      greyIcon: {
        color: 'grey',
        fontSize: '2rem'
      },
      centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh', 
      },
      noDataImage: {
        width: '50%', 
      },
    };
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setMatchesFound(filteredBooks.length > 0);
  }, [filteredBooks]);
   
  

  const handleFavoriteClick = async (book) => {
    try {
      setFavBooks(book);
      const isFavorite = await isFavoriteBook(book.title);
      if (isFavorite) {
        deleteFavBookData(book.title);
      }
    } catch (error) {
      console.error("Error handling favorite click:", error);
    }
  };
  
  
    return (
      <div style={styles.mainContainer}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '12px',
        marginLeft:'15px', padding: '8px' }}
      />
      {matchesFound ? (
        filteredBooks.map((book) => (
      <div key={book.title}>
      <Card style={styles.card}>
        <CardMedia
          component="img"
          alt="Book Cover"
          height="auto"
          image="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg" 
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
        <CardActions >
          <IconButton  aria-label="add to favorites" onClick={() => handleFavoriteClick(book)}
             style={{ color: isFavoriteBook(book.title) ? 'red' : 'grey' }}
            >
                {<IsFavoriteBookCom book={book}/>}
          </IconButton>
        </CardActions>
      </Card>
      </div>
    ))
    ) : (
      <div style={styles.centerContainer}>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544955.jpg?size=626&ext=jpg&ga=GA1.1.1294443822.1703438677&semt=ais"
          alt="No Data"
          style={styles.noDataImage}
        />
      </div>
    )}
      </div>
    );
  }

export default Books