import { useEffect, useState } from "react";
import  AppContext  from "./AppContext";
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
      return false;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Wrong credentials!!");
        } else {
        console.log("An error occurred during login.");
        }
        return true;
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
        console.log("Error during signup:", error);
      }
    }
  };
  

  const isFavoriteBook = async (title) => {
    try {
      const response = await axios.get(`http://localhost:8083/fav/isFavoriteBook/${userName}/${title}`);
      return response.data;
    } catch (error) {
      console.log("Axios error:", error);
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
      console.log("Axios error:", error);
    }
  };

    

 
   

  
  
  const fetchFavBookData = async () => {
    try {
      if (userName) {
        const response = await axios.get(`http://localhost:8083/fav/getallbooks/${userName}`);
        console.log("get all fav books =>", response);
        const res = response.data;
  
        if (res.length === 0) {
          console.warn("No books found for the user.");
          setgetAllFavBooks([]);
        } else {
          setgetAllFavBooks(res);
        }
      } 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.warn("No books found for the user.");
        setgetAllFavBooks([]);
      } else {
        console.log("Axios error:", error);
      }
    }
  };

      
  const addFavData = async () => {
    try {
      if (favbooks.length === 0) {
        console.log("Favorite books array is empty.");
        return;
      }
  
      const response = await axios.post(`http://localhost:8083/fav/addBook/${userName}`, favbooks);
      console.log("Manish =>", response);
      fetchData();
      fetchFavBookData();
    } catch (error) {
      console.log("Axios error:", error);
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
    }
  };
  

        const deleteFavBookData = async (title) => {
          try {
            const response = await axios.delete(`http://localhost:8083/fav/deleteBooks/${userName}/${title}`);
            console.log("Delete response:", response);
            fetchFavBookData();
          } catch (error) {
            console.log("Error deleting favorite book:", error.message);
          }
        };
      
        useEffect(() => {     
          fetchFavBookData();
        }, [userName]);
      
        useEffect(() => {
          addFavData();
      }, [favbooks]);
      
          useEffect(() => {
               fetchData();
          }, [userName]);
          
      
    
    const providers = {
        books,
        favbooks,
        getAllFavBooks,
        deleteFavBook,
        isLoggedIn,
        setIsLoggedIn,
        setDeleteFavBook,
        deleteFavBookData,
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

