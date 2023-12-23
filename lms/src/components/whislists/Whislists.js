import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../context/AppContext';

function Whislists() {

    const { getAllFavBooks,setDeleteFavBook} = useContext(AppContext);

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
          // objectFit: 'cover',
        },
        content: {
          width: '80%',
          textAlign: 'left',
          padding: '16px', 
        },
        lineSpacing: {
          marginBottom: '5px', 
        },
        redIcon: {
          color: 'red',
          fontSize: '2rem'
        },
      };

    const handledeleteFavorite = (value)=>{
        console.log("deleted fav=>",value);
        // const title =value.title;
        setDeleteFavBook(value);
    }

  return (
    <div style={styles.mainContainer}>

   {getAllFavBooks.map(book=>(
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
        <CardActions>
          <IconButton onClick={()=>handledeleteFavorite(book.title)} >
            <DeleteIcon style={styles.redIcon} />
          </IconButton>
        </CardActions>
      </Card>
      </div>
    ))}
    </div>
  )
}

export default Whislists;