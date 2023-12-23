import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const AppProvider = ({children})=>{


    const Initialbooks=[];


    const [books,setBooks] = useState(Initialbooks);
    const [favbooks,setFavBooks] = useState(Initialbooks);
    const [getAllFavBooks,setgetAllFavBooks] = useState(Initialbooks); 
    const [deleteFavBook,setDeleteFavBook] = useState(Initialbooks);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5050/books/all");
          console.log("home up response =>", response);
          const res = response.data.results;
          console.log("res =>", res);
          setBooks(res);
        } catch (error) {
          console.error("Axios error:", error);
        }
      };
    //   setTimeout(() => {
      fetchData();
    //   }, 0);
    }, []);
    
    const userName="Manish";//localhost ka use krna he
    useEffect(() => {
        console.log("Request URL:", `http://localhost:8083/fav/addBook/${userName}`);
        console.log("Request Data:", favbooks);
       try {
          const response = axios.post(`http://localhost:8083/fav/addBook/${userName}`, favbooks)
          .then((response)=>{
            console.log("Manish =>", response);
          });
        } catch (error) {
            console.error("Axios error:", error);
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        }
      }, [favbooks,setFavBooks]);
    
      useEffect(() => {
        const fetchFavBookData = async () => {
          try {
            const response = await axios.get(`http://localhost:8083/fav/getallbooks/${userName}`);
            console.log("get all fav books =>", response);
            const res = response.data;
            console.log("res =>", res);
            setgetAllFavBooks(res);
          } catch (error) {
            console.error("Axios error:", error);
          }
        };
      //   setTimeout(() => {
        fetchFavBookData();
      //   }, 0);
      }, [setgetAllFavBooks]);
    //   const title = "At the Bake Shop";

      useEffect(() => {
          try {
            const response = axios.delete(`http://localhost:8083/fav/deleteBooks/${userName}/${deleteFavBook}`);
            console.log("get all fav books =>", response);
            // const res = response.data;
            // console.log("res =>", res);
            // setAllFavBooks(res);
          } catch (error) {
            console.error("Axios error:", error);
          }
      }, []);
    
    const providers = {
        books,
        favbooks,
        getAllFavBooks,
        deleteFavBook,
        setDeleteFavBook,
        setgetAllFavBooks,
        setFavBooks,
        setBooks
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

