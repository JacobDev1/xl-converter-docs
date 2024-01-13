import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import TabSelect from './TabSelect';

describe('TabSelect', () => {
    let setSelectedTab: jest.Mock = jest.fn();
    let selectedTab: number = 0;
    let button: HTMLElement;
    let getByText: Function;

    const renderTabSelect = (): void => {
        const result = render(
            <BrowserRouter>
                <TabSelect 
                    title="Test"
                    url="/test"
                    index={0}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            </BrowserRouter>
        );

        getByText = result.getByText;
        button = getByText('Test');
    }

    it('responds to setSelected', () => {
        renderTabSelect();
        fireEvent.click(button);
        expect(setSelectedTab).toHaveBeenCalledWith(0);
    });

    it('renders correctly when selected', () => {
        renderTabSelect();
        expect(button).toHaveClass('active');
    });

    it('renders correctly when not selected', () => {
        selectedTab = 1;
        renderTabSelect();
        expect(button).not.toHaveClass('active');
    });
});