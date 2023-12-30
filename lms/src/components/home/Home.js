import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Home() {
  return (
    <div className="main">
      <Carousel
        className="carousel"
        autoPlay
        interval={3000}
        transitionTime={2000}
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014_1280.jpg"
            alt="Carousel Item 1"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg"
            alt="Carousel Item 2"
          />
        </div>
        <div>
          <img
            src="https://anthonyskurseong.org/images/academics/Lib_Banner.png"
            alt="Carousel Item 3"
          />
        </div>

        
      </Carousel>

      <div className="content">

      {/* split 1 */}

      <div className="split-container1">
        <div className="image-container1">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-book-club-illustration_23-2149334858.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"
            alt="Image"
          />
        </div>
        <div className="content-container1">
          <h2> WHAT IS THE PURPOSE OF A LIBRARY MANAGEMENT SYSTEM? </h2>
          <br></br>
          <p> The purpose of a library management system is to operate a library with efficiency and at reduced costs. The system being entirely automated streamlines all the tasks involved in operations of the library. The activities of book purchasing, cataloging, indexing, circulation recording and stock checking are done by the software. Such software eliminates the need for repetitive manual work and minimizes the chances of errors.

The library management system software helps in reducing operational costs. Managing a library manually is labor intensive and an immense amount of paperwork is involved. An automated system reduces the need for manpower and stationery. This leads to lower operational costs.

The system saves time for both the user and the librarian. With just a click the user can search for the books available in the library. The librarian can answer queries with ease regarding the availability of books. Adding, removing or editing the database is a simple process. Adding new members or cancelling existing memberships can be done with ease. </p>
          
        </div>
      </div>

 {/* split 2 */}

      <div className="split-container2">
        
        <div className="content-container2">
          <h2> HOW DO YOU DESIGN A LIBRARY
MANAGEMENT SYSTEM?</h2>

<br></br>
          <p> Library management systems are designed to manage the movement of books and maintain records of the members in a library. The software solution is designed based on the system requirements, the people involved, the content of the operation and the activity to be performed.

The system requirement in library management focuses on the possibility of search for books by title, author or subject by the member. They should be able to locate a book physically by the unique identification code and the rack number for each book.
The system should provide details on the books held by the members. The system should limit the number of books that can be taken and the number of days that a book can be kept for. The system should generate fines when due from the member.
The next step focuses on the functions of the librarian, the member and the system. Managing books by the librarian, searching for books by the members and notifications sent by the system are detailed in a case diagram. </p>
          
        </div>

        <div className="image-container2">
          <img
            src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-SYSTEM-DOES-A-LIBRARY-USE-min.png"
            alt="Image"
          />
        </div>
      </div>

      {/* split 3 */}

      <div className="split-container3">
        <div className="image-container3">
          <img
            src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/HOW-DO-YOU-DESIGN-A-LIBRARY-MANAGEMENT-SYSTEM-min-768x768.png"
            alt="Image"
          />
        </div>
        <div className="content-container3">
          <h2> WHAT SYSTEM DOES A LIBRARY USE? </h2>
          <br></br>
          <p> The library management system software should be user-friendly and cost effective. It should be in tune with the establishment’s needs and compatible with the existing technology.

A library should use a software system that helps in effectively managing the data in a library. The library database includes all relevant information regarding assets to membership details. The software records details on all reading and reference material available for reading and lending. Membership information, lending details and renewal dates are managed by the software.

A library management system software with capabilities of barcoding and RFID helps in scanning the barcode while lending or returning books. Management of the catalogue and inventory by the system makes the process accountable.

The feature of the software assists in inventory and circulation management of the books. Books in stock, on the shelves, in circulation, missing or to be ordered can be tracked by the system. Acquiring new assets becomes easier with the software. </p>
          
        </div>
      </div>

      </div>


      <div className="aboutWebsite">
          <img
            src="https://www.seminolecountyfl.gov/core/fileparse.php/3300/urlt/Library-Hero-Template-2022-2399-x-436.jpg"
            alt="Image"
          />
        </div>
      

      {/* card */}

      <div className="cardContent">
      <Card className="card1" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/47/02/ed/4702ed7b709edf02a58b87257b2e95f4.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    {/* 2 */}

    <Card className="card2" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.npr.org/assets/img/2023/06/26/copy-of-lk_books_harlan-187_wide-c65b560edf6e3fb66d216348e58870d8ecd2cb2d-s1100-c50.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    {/* 3 */}

    <Card className="card3" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://freepngimg.com/save/131926-antique-book-stack-free-transparent-image-hd/1024x765.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
      </div>

    </div>
  );
}

export default Home;
