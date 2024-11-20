import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
    test('Counter Default Value must be 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });

    test('increment works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });

    test('decrement works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });

    test('reset the count using reset button', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        const resetButton = screen.getByTestId('reset-button');

        fireEvent.click(incrementButton);
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent('0');
    });
});

describe('Greeting Component', () => {
    test('greeting component {nama kalian}', () => {
        const name = 'Nadia Farah';
        render(<Greeting nadia={name} />);
        const greetingElement = screen.getByTestId('greeting');
        expect(greetingElement).toHaveTextContent(`Hello, ${name}`);
    });

    test('greeting component {nama dosen kalian}', () => {
        const name = 'Pak Farid';
        render(<Greeting nadia={name} />);
        const greetingElement = screen.getByTestId('greeting');
        expect(greetingElement).toHaveTextContent(`Hello, ${name}`);
    });
});

describe('AlertButton Component', () => {
    test('triggers alert with correct message when clicked', () => {
        const testMessage = 'This is a test alert!';
        window.alert = jest.fn(); // Mock alert function

        render(<AlertButton message={testMessage} />);
        const alertButton = screen.getByTestId('alert-button');
        fireEvent.click(alertButton);

        expect(window.alert).toHaveBeenCalledWith(testMessage);
    });
});
