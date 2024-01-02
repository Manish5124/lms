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
  
});
