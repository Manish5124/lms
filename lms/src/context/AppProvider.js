import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const AppProvider = ({children})=>{
    const Initialbooks=[];
    const [books,setBooks] = useState(Initialbooks);
    const [favbooks,setFavBooks] = useState(Initialbooks);
    const [getAllFavBooks,setgetAllFavBooks] = useState(Initialbooks); 
    const [deleteFavBook,setDeleteFavBook] = useState(Initialbooks);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const userName=localStorage.getItem('userName');



  const loginUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", data);
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('token', response.data);
      fetchData(); 
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Wrong credentials!!");
      } else {
        alert("An error occurred during login.");
      }
    }
  };

 
  const signupUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:8082/users/RegisterUser", data);
      alert(response.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Username already exists. Please choose a different username.");
      } else {
        console.error("Error during signup:", error);
      }
    }
  };
  

  const isFavoriteBook = async (title) => {
    try {
      const response = await axios.get(`http://localhost:8083/fav/isFavoriteBook/${userName}/${title}`);
      return response.data;
    } catch (error) {
      console.error("Axios error:", error);
      return false;
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5050/books/all");
      // const response = await axios.get("http://localhost:5050/books/search/Polar Bears")
      console.log("home up response =>", response);
      const res = response.data.results;
      console.log("res =>", res);
      setBooks(res);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

    useEffect(() => {
         fetchData();
    }, [userName]);
    

    useEffect(() => {
      console.log("Request URL:", `http://localhost:8083/fav/addBook/${userName}`);
      console.log("Request Data:", favbooks);
      const addFavData = async () => {
        try {
          if (favbooks.length === 0) {
            console.error("Favorite books array is empty.");
            return;
          }
      
          const response = await axios.post(`http://localhost:8083/fav/addBook/${userName}`, favbooks);
          console.log("Manish =>", response);
          fetchData();
          fetchFavBookData();
        } catch (error) {
          console.error("Axios error:", error);
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        }
      };
      
  
      addFavData();
  }, [favbooks]);
  
  const fetchFavBookData = async () => {
    try {
      if (userName) {
        const response = await axios.get(`http://localhost:8083/fav/getallbooks/${userName}`);
        console.log("get all fav books =>", response);
        const res = response.data;
  
        if (res.length === 0) {
          console.warn("No books found for the user.");
          fetchFavBookData();
        } else {
          setgetAllFavBooks(res);
        }
      } else {
        console.error("userName is null. Unable to make the request.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("No books found for the user.");
        setgetAllFavBooks([]);
      } else {
        console.error("Axios error:", error);
      }
    }
  };
  
  useEffect(() => {     
    fetchFavBookData();
  }, [userName]);
  
      // const fetchFavBookData = async () => {
      //   try {
      //     const response = await axios.get(`http://localhost:8083/fav/getallbooks/${userName}`);
      //     console.log("get all fav books =>", response);
      //     const res = response.data;
      //     console.log("res =>", res);
      //     setgetAllFavBooks(res);
      //   } catch (error) {
      //     console.error("Axios error:", error);
      //   }
      // };
      // useEffect(() => {     
      //   fetchFavBookData();
      // }, []);
    

      // useEffect(() => {
      //   const deleteFavBookData = async () => {
      //     try {
      //       if (favbooks.length === 0 ) {
      //         console.error("Favorite books array is empty or deleteFavBook is not set.");
      //         return;
      //       }
      
      //       const response = await axios.delete(`http://localhost:8083/fav/deleteBooks/${userName}/${deleteFavBook}`);
      //       console.log("get delete response =>", response);
      //       fetchFavBookData();
      //     } catch (error) {
      //       console.error("Axios error:", error);
      //     }
      //   };
      
      //   if (deleteFavBook) {
      //     deleteFavBookData();
      //   }
      // }, [deleteFavBook]);
      
      useEffect(() => {
        const deleteFavBookData = async () => {
          try {
            if (!deleteFavBook || favbooks.length === 0) {
              console.error("Delete book not specified or favorite books array is empty.");
              return;
            }
            const response = await axios.delete(`http://localhost:8083/fav/deleteBooks/${userName}/${deleteFavBook}`);
            console.log("Delete response:", response);
            fetchFavBookData();
          } catch (error) {
            console.error("Error deleting favorite book:", error.message);
          }
        };
      
        if (deleteFavBook) {
          deleteFavBookData();
        }
      }, [deleteFavBook, userName, favbooks, fetchFavBookData]);
      



      
    
    const providers = {
        books,
        favbooks,
        getAllFavBooks,
        deleteFavBook,
        isLoggedIn,
        setDeleteFavBook,
        setgetAllFavBooks,
        setFavBooks,
        setBooks,
        isFavoriteBook,
        loginUser,
        signupUser,

    };


    return (
        <div>
        <AppContext.Provider value={providers}>
            {children}
        </AppContext.Provider>
        </div>
    );
}

export default AppProvider;

