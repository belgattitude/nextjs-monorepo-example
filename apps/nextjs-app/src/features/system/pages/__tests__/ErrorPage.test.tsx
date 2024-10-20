import { ErrorPage } from '@/features/system/pages';
import { render, screen } from '@/test-utils';

describe('errorPage test', () => {
  it('should contain error passed status code', () => {
    render(<ErrorPage statusCode={500} />);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(screen.getByTestId('error-status-code')).toHaveTextContent('500');
  });
});
