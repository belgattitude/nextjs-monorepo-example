import { NotFoundPage } from '@/features/system/pages';
import { render, screen } from '@/test-utils';

describe('notFoundPage test', () => {
  it('should contains children', () => {
    render(<NotFoundPage title={'404 - Not found'} />);
    expect(screen.getByTestId('not-found-title')).toHaveTextContent(
      '404 - Not found'
    );
  });
});
