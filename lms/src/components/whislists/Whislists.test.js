import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Whislists from './Whislists';
import AppContext from '../../context/AppContext';
localStorage.setItem('userName',"Aditi");
localStorage.setItem('token',"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBc2hvayIsImV4cCI6MTcwMjQ1MzY3MSwiaWF0IjoxNzAyNDUwMDcxfQ.IBcsJOmaaLwuPKGtfL8g8C22GFv2Dy2A8DZCmuhv6ism0Fr_5puGIXfbBcgevRWaG_9IoXKKdeqaE7Y6hMEJ_g");
// Mock the context values
jest.mock('../../context/AppProvider.js', () => ({
  __esModule: true,
  default: {
    getAllFavBooks: [
      {
        title: 'At the Bake Shop',
        series_name: 'Collection 2',
        authors: ['Daffodil Hill Press'],
        min_age: 4,
        max_age: 8,
        page_count: 4,
        categories: null,
        summary: null,
      },
    ],
    setDeleteFavBook: jest.fn(),
    deleteFavBookData: jest.fn(),
  },
}));

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { getAllFavBooks: [{
            title: 'At the Bake Shop',
            series_name: 'Collection 2',
            authors: ['Daffodil Hill Press'],
            min_age: 4,
            max_age: 8,
            page_count: 4,
            categories: null,
            summary: null,
          },] } })),
}));

describe('Whislists Component', () => {
  test('renders the component', () => {
    render(
      <MemoryRouter>
        <Whislists />
      </MemoryRouter>
    );

    // Check if the component renders without crashing
    // expect(screen.getByText('Search books...')).toBeInTheDocument();
  });
});
