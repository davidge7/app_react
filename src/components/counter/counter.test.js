import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
    // Test initial render
    test('renders counter with initial value of 0', () => {
        render(<Counter />);
        expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
    });

    // Test increment functionality
    test('increments counter when + button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);
        expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
    });

    // Test decrement functionality
    test('decrements counter when - button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);
        expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
    });

    // Test reset functionality
    test('resets counter to 0 when Reset button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByText('+');
        const resetButton = screen.getByText('Reset');
        
        // First increment a few times
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(screen.getByText('Current Count: 2')).toBeInTheDocument();
        
        // Then reset
        fireEvent.click(resetButton);
        expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
    });

    // Test multiple operations
    test('handles multiple operations correctly', () => {
        render(<Counter />);
        const incrementButton = screen.getByText('+');
        const decrementButton = screen.getByText('-');
        
        // Increment twice
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(screen.getByText('Current Count: 2')).toBeInTheDocument();
        
        // Decrement once
        fireEvent.click(decrementButton);
        expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
    });

    // Test UI elements presence
    test('renders all necessary UI elements', () => {
        render(<Counter />);
        expect(screen.getByText('React Counter')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
        expect(screen.getByText('-')).toBeInTheDocument();
        expect(screen.getByText('Reset')).toBeInTheDocument();
    });

    // Test button accessibility
    test('buttons are accessible', () => {
        render(<Counter />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3); // Should have 3 buttons
        buttons.forEach(button => {
            expect(button).toBeEnabled();
        });
    });

    // Test rapid clicks
    test('handles rapid clicks correctly', () => {
        render(<Counter />);
        const incrementButton = screen.getByText('+');
        
        // Simulate 5 rapid clicks
        for (let i = 0; i < 5; i++) {
            fireEvent.click(incrementButton);
        }
        expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
    });
});
