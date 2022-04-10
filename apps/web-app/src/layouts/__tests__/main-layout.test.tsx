import { MainLayout } from '@/layouts/MainLayout';
import { render, screen } from '@/test-utils';

describe('Layout tests', () => {
  it('should render children', async () => {
    render(
      <MainLayout>
        <div role="article">Hello</div>
      </MainLayout>
    );
    const appContent = screen.getByRole('article');
    expect(appContent).toHaveTextContent('Hello');
  });
});
