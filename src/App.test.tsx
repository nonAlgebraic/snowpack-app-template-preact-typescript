import { h } from 'preact';
import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import App from './App';

describe('App.tsx', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders learn preact link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn preact/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('has no accessibility errors', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
