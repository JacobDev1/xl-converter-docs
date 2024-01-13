import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MobileMenu from './MobileMenu';

describe('MobileMenu', () => {
    const menuEntries = [
        ['Home', '/'],
        ['About', '/about'],
        ['Contact', '/contact'],
    ];

    const renderMobileMenu = (selectedTab = 0, navigate = jest.fn()) => render(
        <BrowserRouter>
            <MobileMenu
                menuEntries={menuEntries}
                selectedTab={selectedTab}
                setSelectedTab={jest.fn()}
                navigate={navigate}
            />
        </BrowserRouter>
    );

    it('renders correctly', () => {
        const result = renderMobileMenu();
        const select = result.getByRole('combobox');
        const options = result.getAllByRole('option');

        expect(select).toBeInTheDocument();
        for(let i = 0; i < menuEntries.length; i++){
            expect(options[i].textContent).toBe(menuEntries[i][0]);
            expect(options[i]).toHaveAttribute('value', menuEntries[i][1]);
        }
    });

    it('navigates correctly', () => {
        const navigate = jest.fn();
        
        const result = renderMobileMenu(0, navigate);
        const select = result.getByRole('combobox');
        fireEvent.change(select, { target: { value: menuEntries[1][1]}});
        expect(navigate).toHaveBeenCalledWith(menuEntries[1][1]);
    });

    it('handles wrong range correctly', () => {
        const result = renderMobileMenu(-1);
        
        const select = result.getByRole('combobox');
        expect(select).toHaveValue(menuEntries[0][1]);
    });
});