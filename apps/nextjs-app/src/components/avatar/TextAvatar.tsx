import type { FC } from 'react';

type FullName = {
  firstName: string;
  lastName?: string;
};

type Props = {
  name: string | FullName;
  className?: string;
};

const mapToFullName = (nameOrFullName: string | FullName): FullName => {
  if (typeof nameOrFullName === 'string') {
    const [firstName = 'F', lastName = 'L'] = nameOrFullName.split(' ');
    return {
      firstName,
      lastName,
    };
  }
  return nameOrFullName;
};

export const TextAvatar: FC<Props> = (props) => {
  const { name, className = '' } = props;
  const { firstName, lastName } = mapToFullName(name);
  return (
    <div className={`text-avatar ${className}`}>
      {firstName}
      {lastName}
    </div>
  );
};
