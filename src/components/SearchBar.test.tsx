import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('renders and submits correctly', () => {
        const navigate = jest.fn();
        const setSelectedTab = jest.fn();

        const { getByPlaceholderText } = render(
            <MemoryRouter>
                <SearchBar
                    navigate={navigate}
                    setSelectedTab={setSelectedTab}
                />
            </MemoryRouter>
        );
        
        const input = getByPlaceholderText('Search...');
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.submit(input);

        expect(navigate).toHaveBeenCalledWith('/search?q=test');
        expect(setSelectedTab).toHaveBeenCalledWith(-1);
    });
});