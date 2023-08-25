import { render, screen } from '@/test-utils';
import { MainLayout } from '../MainLayout';

describe('main layout tests', () => {
  it('should render children', () => {
    render(
      <MainLayout>
        <div role="article">Hello</div>
      </MainLayout>
    );
    const appContent = screen.getByRole('article');
    expect(appContent).toHaveTextContent('Hello');
  });
});
