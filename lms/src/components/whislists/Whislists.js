import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  AppContext  from '../../context/AppContext';
function Whislists() {

    const { getAllFavBooks,setDeleteFavBook,deleteFavBookData} = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [matchesFound, setMatchesFound] = useState(true);
    const styles = {
        whislistBack:{
          minHeight:'100vh',
          background: 'linear-gradient(#2A00B7, #42006C)'
        },
        mainContainer:{
          // marginTop: '12px'
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
        title:{
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          marginBottom: '5px', 
         },
        redIcon: {
          color: 'red',
          fontSize: '2rem'
        },
        centerContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center'
        },
        noDataImage: {
          width: '33%', 
        },
      };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = getAllFavBooks.filter((book) =>
  book.title.toLowerCase().includes(searchQuery.toLowerCase())
);

useEffect(() => {
  setMatchesFound(filteredBooks.length > 0);
}, [filteredBooks]);

    const handledeleteFavorite = (value)=>{
        console.log("deleted fav=>",value);
        deleteFavBookData(value);
    }
useEffect(()=>{
  console.log("getALl Books=>",getAllFavBooks);
},[getAllFavBooks])
  return (
    <div style={styles.whislistBack}>
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
          image="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=" 
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
    </div>
  )
}

export default Whislists;