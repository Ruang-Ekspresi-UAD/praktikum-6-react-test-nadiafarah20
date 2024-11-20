import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
    test('1. Counter Default Value must be 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('display-value');
        expect(countValue).toHaveTextContent('Value: 0');
    });

    test('2. increment works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('display-value');
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('Value: 1');
    });

    test('3. decrement works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('display-value');
        const incrementButton = screen.getByTestId('increment-button');
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(incrementButton); // Pastikan nilai menjadi 1
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('Value: 0');
    });

    test('4. display has correct value (display.js)', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('display-value');
        expect(countValue).toBeInTheDocument(); // Pastikan elemen ada
        expect(countValue).toHaveTextContent('Value: 0'); // Nilai awal benar
    });
});
