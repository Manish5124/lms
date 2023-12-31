import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import AppContext from '../../context/AppContext';

describe('Header component', () => {
  test('renders Header component with title', () => {
    const contextValue = { isLoggedIn: true };
    render(
      <AppContext.Provider value={contextValue}>
          <Router>
        <Header />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByText('Library Management System')).toBeInTheDocument();
  });
  
  test('renders Header component with title', () => {
    const contextValue = { isLoggedIn: false };
    render(
      <AppContext.Provider value={contextValue}>
          <Router>
        <Header />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('renders all links correctly', () => {
    const contextValue = { isLoggedIn: true };
    render(
      <AppContext.Provider value={contextValue}>
          <Router>
        <Header />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Favorite')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
