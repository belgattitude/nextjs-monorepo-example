// To test out support for emotion-11/styled in storybook
import { isNonEmptyString } from '@mqs/core-lib';
import type { FC } from 'react';
import * as S from './BasicCard.styles';

type Props = {
  image?: string;
  title: string;
  description: string;
};

export const BasicCard: FC<Props> = (props) => {
  const { image, title, description } = props;
  const imgSrc = isNonEmptyString(image) ? image : undefined;
  return (
    <S.Ctn>
      {imgSrc !== undefined ? (
        <img loading="lazy" src={imgSrc} alt="something" />
      ) : null}
      <div className="container">
        <h4>
          <strong>{title}</strong>
        </h4>
        <p>{description}</p>
      </div>
    </S.Ctn>
  );
};
