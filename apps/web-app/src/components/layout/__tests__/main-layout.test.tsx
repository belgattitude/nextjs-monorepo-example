import { render } from '@/test-utils';
import { MainLayout } from '@/components/layout/main-layout';

describe('Layout tests', () => {
  it('should render children', async () => {
    const { getByTestId } = render(
      <MainLayout>
        <div data-testid={'app-content'} className={'cls'}>
          Hello
        </div>
      </MainLayout>
    );
    const appContent = getByTestId('app-content');
    expect(appContent).toHaveClass('cls');
    expect(appContent).toHaveTextContent('Hello');
  });
});
