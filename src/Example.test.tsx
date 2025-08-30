import { describe, it, expect } from 'vitest';

describe('Sanity check', () => {
    it('always passes', () => {
        expect(true).toBe(true);
    });

    it('adds numbers correctly', () => {
        expect(1 + 1).toBe(2);
    });
});
