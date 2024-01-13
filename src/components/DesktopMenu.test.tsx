import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import DesktopMenu from './DesktopMenu';

describe('DesktopMenu', () => {
    const menuEntries = [
        ['Home', '/'],
        ['About', '/about'],
        ['Contact', '/contact'],
    ];

    it('renders correctly', () => {
        const result = render(
            <BrowserRouter>
                <DesktopMenu
                    menuEntries={menuEntries}
                    selectedTab={0}
                    setSelectedTab={jest.fn()}
                    navigate={jest.fn()}
                />
            </BrowserRouter>
        );

        const search = result.getByPlaceholderText('Search...');
        const links = result.getAllByRole('link');
        const footer = result.getByText(/XL Converter/i);

        expect(search).toBeInTheDocument();
        for(let i = 0; i < menuEntries.length; i++){
            expect(links[i].textContent).toBe(menuEntries[i][0]);
            expect(links[i]).toHaveAttribute('href', menuEntries[i][1]);
        }
        expect(footer).toBeInTheDocument();
    });


});