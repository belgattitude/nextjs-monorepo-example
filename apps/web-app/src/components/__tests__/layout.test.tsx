import { render } from '@/test-utils';
import { Layout } from '@/components/layout';

describe('Layout tests', () => {
  it('should render children', async () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid={'app-content'} className={'cls'}>
          Hello
        </div>
      </Layout>
    );
    const appContent = getByTestId('app-content');
    expect(appContent).toHaveClass('cls');
    expect(appContent).toHaveTextContent('Hello');
  });
});
