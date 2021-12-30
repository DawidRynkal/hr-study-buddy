import { render, fireEvent, screen } from 'test-utils';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('search...');
  });

  it('Dispaly users when searching phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('search...');
    fireEvent.change(input, { target: { value: 'Low' } });

    await screen.findByText(/Lowell/);
  });
});
