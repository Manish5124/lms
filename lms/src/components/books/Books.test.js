import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Books from './Books';

const data =  [
  {
      "title": "At the Bake Shop",
      "title_search": "At the Bake Shop",
      "page_count": 4,
      "series_name": "Collection 2",
      "min_age": 4,
      "max_age": 8,
      "book_type": null,
      "language": "english",
      "authors": [
          "Daffodil Hill Press"
      ],
      "subcategories": null,
      "categories": null,
      "summary": null
  },
  {
      "title": "Jon and Sis",
      "title_search": "Jon and Sis",
      "page_count": 4,
      "series_name": "Collection 1",
      "min_age": 4,
      "max_age": 8,
      "book_type": null,
      "language": "english",
      "authors": [
          "Daffodil Hill Press"
      ],
      "subcategories": null,
      "categories": null,
      "summary": null
  }]
describe('Whislist component', () => {
    test('renders Books component with title', () => {
      const contextValue = {
        books: data,
        setFavBooks: jest.fn(),
        setDeleteFavBook: jest.fn(),
        deleteFavBookData: jest.fn(),
        isFavoriteBook: jest.fn(() => false), // Mock isFavoriteBook function
      };
    render(
      <AppContext.Provider value={contextValue}>
          <Router>
          <Books/>
        </Router>
      </AppContext.Provider>
    );
    const title1 = screen.getByText('At the Bake Shop')
    expect(title1).toBeInTheDocument();
    const title2 = screen.getByText('Jon and Sis')
    expect(title2).toBeInTheDocument();
  });

  test('renders books component with placeholder', () => {
    const contextValue = {
        books: data,
        setFavBooks: jest.fn(),
        setDeleteFavBook: jest.fn(),
        deleteFavBookData: jest.fn(),
        isFavoriteBook: jest.fn(() => false),
      };
    render(
      <AppContext.Provider value={contextValue}>
          <Router>
       <Books/>
        </Router>
      </AppContext.Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search books...');
    expect(inputElement).toBeInTheDocument();
  });

test('filters books based on search input', () => {
    const contextValue = {
      books: data,
      setFavBooks: jest.fn(),
      setDeleteFavBook: jest.fn(),
      deleteFavBookData: jest.fn(),
      isFavoriteBook: jest.fn(() => false),
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Router>
          <Books />
        </Router>
      </AppContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search books...'), {
      target: { value: 'Jon' },
    });

    expect(screen.queryByText('At the Bake Shop')).not.toBeInTheDocument();
    expect(screen.getByText('Jon and Sis')).toBeInTheDocument();
  });

});
