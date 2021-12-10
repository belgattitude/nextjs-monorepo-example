// To test out support for emotion-11/styled in storybook
import * as S from './BasicCard.styles';

type Props = {
  image?: string;
  title: string;
  description: string;
};
export const BasicCard: React.FC<Props> = (props) => {
  const { image, title, description } = props;
  return (
    <S.Ctn>
      <img loading="lazy" src={image} alt="something" />
      <div className="container">
        <h4>
          <strong>{title}</strong>
        </h4>
        <p>{description}</p>
      </div>
    </S.Ctn>
  );
};
