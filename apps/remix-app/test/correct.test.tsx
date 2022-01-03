import { render, screen } from '@/test-utils';
import { default as NiceWork } from '../app/routes/demos/correct';

describe('Correct component', () => {
  it('renders without crashing', () => {
    render(<NiceWork />);
    const appContent = screen.getByTestId('nice-work');
    expect(appContent).toHaveTextContent('You got it right!');
  });
});
