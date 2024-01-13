import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Navigation', () => {
    const menuEntries = [
        ['Home', '/'],
        ['About', '/about'],
        ['Contact', '/contact'],
    ];

    it('renders correctly', () => {
        const result = render(
            <BrowserRouter>
                <Navigation
                    menuEntries={menuEntries}
                    selectedTab={0}
                    setSelectedTab={jest.fn()}
                />
            </BrowserRouter>
        );
        const links = result.getAllByRole('link');
        const select = result.getByRole('combobox');
        for(let i = 0; i < menuEntries.length; i++){
            expect(links[i].textContent).toBe(menuEntries[i][0]);
            expect(links[i]).toHaveAttribute('href', menuEntries[i][1]);

            expect(select.children[i].textContent).toBe(menuEntries[i][0]);
        }
    });
});