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
      const [hoveredCard, setHoveredCard] = useState(null);

    const styles = {
      mainContainer:{
       
      },
      card: {
        display: 'flex',
        marginLeft: '12%',
        marginRight: '12%',
        marginTop:'1%',
        maxWidth: '80%', 
      },
      media: {
        width: '20%', 
       },    
       title:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginBottom: '5px', 
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
        width: '30%', 
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
      <Card  style={{
    ...styles.card,
    boxShadow: hoveredCard === book.title ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' : 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  }}
  onMouseEnter={() => setHoveredCard(book.title)}
  onMouseLeave={() => setHoveredCard(null)}
      
      >
      <CardMedia
          component="img"
          alt="Book Cover"
          height="auto"
          image="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=" 
          style={styles.media}
        />
        <CardContent style={styles.content}>
          <Typography variant="h5" component="div"  style={styles.title}>
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

export default Books;