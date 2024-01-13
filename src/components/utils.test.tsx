import { clamp } from './utils';

describe('clamp', () => {
    it('should return min value if num is less than min', () => {
        expect(clamp(0, 5, 10)).toBe(5);
    });

    it('should return max value if num is greater than max', () => {
        expect(clamp(15, 5, 10)).toBe(10);
    });
    
    it('should return num if num is within the range', () => {
        expect(clamp(7, 5, 10)).toBe(7);
    });
});