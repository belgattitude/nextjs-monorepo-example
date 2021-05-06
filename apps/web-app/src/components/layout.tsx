import * as S from './layout.style';

export const Layout: React.FC = (props) => {
  const { children } = props;
  return <S.LayoutCtn>{children}</S.LayoutCtn>;
};
