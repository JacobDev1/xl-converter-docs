import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Search from './Search';

const searchIndex = [
    {
        "title": "Adding Files",
        "link": "/adding-files",
        "content": "Adding Files Add files (or folders) by dragging and dropping them onto the program. This works on every tab, not just the Input tab Alternatively, use the buttons at the bottom. Add Files - add selected files Add Folder - add all files from a folder (and its subfolders) "
    }
];

describe('Search', () => {
    it('displays search results correctly', () => {
        const result = render(
            <MemoryRouter initialEntries={['/search?q=files']}> 
                <Search
                    updateSelectedTab={jest.fn()}
                    searchIndex={searchIndex}
                />
            </MemoryRouter>
        );
        
        const header = result.getByRole('heading', { name: 'Adding Files' });
        const link = result.getByRole('link', { name: /adding files/i });
        const description = result.getByText(/Add files \(or folders\)*/i);
        const highlightedPhrase = result.container.querySelector('.highlight');

        expect(header).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/adding-files');
        expect(description).toBeInTheDocument();
        expect(highlightedPhrase).toBeInTheDocument();
    });

    it('displays no results', () => {
        const result = render(
            <MemoryRouter initialEntries={['/search?q=ABCDEFG']}> 
                <Search
                    updateSelectedTab={jest.fn()}
                    searchIndex={searchIndex}
                />
            </MemoryRouter>
        );
        
        const header = result.getByRole('heading', { name: /No results*/i });
        expect(header).toBeInTheDocument();
    }); 

    it('handles empty query', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=']}>
                <Search
                    updateSelectedTab={jest.fn()}
                    searchIndex={searchIndex}
                />
            </MemoryRouter>
        );
    });

    it('updates selected entry', () => {
        const updateSelectedTab = jest.fn();
        const result = render(
            <MemoryRouter initialEntries={['/search?q=file']}>
                <Search
                    updateSelectedTab={updateSelectedTab}
                    searchIndex={searchIndex}
                />
            </MemoryRouter>
        );
        
        const heading = result.getByRole('heading', { name: searchIndex[0].title });
        fireEvent.click(heading);
        expect(updateSelectedTab).toHaveBeenCalledWith(searchIndex[0].link)
    });

    it('displays whole words', () => {
        const result = render(
            <MemoryRouter initialEntries={['/search?q=lternatively']}>
                <Search
                    updateSelectedTab={jest.fn()}
                    searchIndex={searchIndex}
                />
            </MemoryRouter>
        );

        const highlightedPhrase = result.container.querySelector('.highlight');
        expect(highlightedPhrase).toBeInTheDocument();
    });
});