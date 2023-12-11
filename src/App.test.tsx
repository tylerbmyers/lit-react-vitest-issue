import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import SimpleGreeting from './simple-greeting';

describe('<App />', () => {
  it('this will fail', () => {
    render(<App />);
    expect((screen.getByTestId('simpleGreetingWithPackage') as SimpleGreeting).name).toBe('Testing');
  });
  it('this will pass', () => {
    render(<App />);
    expect((screen.getByTestId('simpleGreetingWithDirectImport') as SimpleGreeting).name).toBe('Testing');
  });
});
