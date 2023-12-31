import React, { useContext, useEffect, useState } from 'react'
import  AppContext from '../../context/AppContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
const IsFavoriteBookCom = ({ book }) => {
  const { isFavoriteBook } = useContext(AppContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const isFavorite = await isFavoriteBook(book.title);
        setStatus(isFavorite);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    checkFavoriteStatus();
  }, [isFavoriteBook, book.title]);

  return (
    <div style={{ color: status ? 'grey' : 'red' }}>
      <FavoriteIcon />
    </div>
  );
};

export default IsFavoriteBookCom;
