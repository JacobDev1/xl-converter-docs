import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('Footer', () => {
    it('renders component correctly', () => {
        const { getByText } = render(<Footer />);
        const link1 = getByText(/XL Converter/i);
        const link2 = getByText(/code poems/i);

        expect(link1).toBeInTheDocument();
        expect(link1).toHaveAttribute('href', 'https://codepoems.eu/xl-converter');
        expect(link2).toBeInTheDocument();
        expect(link2).toHaveAttribute('href', 'https://codepoems.eu/about/');
    });
});