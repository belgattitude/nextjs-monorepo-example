import { ErrorPage } from '@/features/system/pages';
import { render, screen } from '@/test-utils';

describe('ErrorPage test', () => {
  it('should contain error status code', async () => {
    render(<ErrorPage statusCode={500} />);
    expect(screen.getByTestId('error-status-code')).toHaveTextContent('500');
  });
});
