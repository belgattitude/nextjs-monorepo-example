import renderer from 'react-test-renderer';
import { Banner } from '../Banner';

it('should match snapshot', () => {
  const tree = renderer.create(<Banner />).toJSON();
  expect(tree).toMatchSnapshot();
});
