import { default as NiceWork } from '../correct';
import { render, screen } from '@/test-utils';

describe('Correct component', () => {
  it('renders without crashing', () => {
    render(<NiceWork />);
    const appContent = screen.getByTestId('nice-work');
    expect(appContent).toHaveTextContent('You got it right!');
  });
});
