import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test('renders an image with alt text', () => {
  render(<App />);
  const img = screen.getByAltText(/yourself/i);
  expect(img).toHaveAttribute('src', expect.stringContaining('your-image.jpg'));
});

test('renders a second-level heading with "About Me"', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent('About Me');
});

test('renders a paragraph for biography', () => {
  render(<App />);
  const paragraph = screen.getByText('A paragraph for your biography');
  expect(paragraph).toBeInTheDocument();
});

test('renders a link to GitHub page', () => {
  render(<App />);
  const githubLink = screen.getByRole('link', { name: /github/i });
  expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
});

test('renders a link to LinkedIn page', () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
});
