import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.js';
import AppProvider from '../../context/AppProvider';
localStorage.setItem('userName',"Aditi");
localStorage.setItem('token',"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBc2hvayIsImV4cCI6MTcwMjQ1MzY3MSwiaWF0IjoxNzAyNDUwMDcxfQ.IBcsJOmaaLwuPKGtfL8g8C22GFv2Dy2A8DZCmuhv6ism0Fr_5puGIXfbBcgevRWaG_9IoXKKdeqaE7Y6hMEJ_g");
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

const setIsLoggedInMock = jest.fn();
const Wrapper = ({children})=>{
  <AppProvider>
         <Router>
        {children}
         </Router>
  </AppProvider>

}
describe('Header component', () => {
  // test('renders Header component with title', () => {
  //   render(
  //     <AppProvider>
  //       <Router>
  //         <Header />
  //       </Router>
  //     </AppProvider>
  //   );
  //   expect(screen.getByText('Library Management System')).toBeInTheDocument();
  // });
    
  // test('renders Header component with Home', () => {
  //   render(
  //     <AppProvider>
  //       <Router>
  //         <Header />
  //       </Router>
  //     </AppProvider>
  //   );
  //   expect(screen.getByText('Home')).toBeInTheDocument();
  // });

  test('renders Header component with Login', async () => {
    render((
      <Header />
       ),{wrapper: Wrapper});
       const textEle = await screen.findByText('Login')
    expect(textEle).toBeInTheDocument();
  });
  test('renders navigation links correctly', () => {
    const setIsLoggedInMock = jest.fn();
    render((
         <Header />
          ),{wrapper: Wrapper});
  
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Favorite')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
  
  // test('renders login link when not logged in', () => {
  //   render(
  //     <AppProvider>
  //       <Router>
  //         <Header />
  //       </Router>
  //     </AppProvider>
  //   );

  //   // Assuming there is a login link when not logged in
  //   expect(screen.getByText('Login')).toBeInTheDocument();
  // });

  // test('handles logout correctly', () => {
  //   render(
  //     <AppProvider>
  //       <Router>
  //         <Header />
  //       </Router>
  //     </AppProvider>
  //   );

  //   // Assuming the user is initially logged in
  //   fireEvent.click(screen.getByText('Logout'));

  //   // Check if the user is redirected to the login page after logout
  //   expect(screen.getByText('Login')).toBeInTheDocument();
  // });
});
