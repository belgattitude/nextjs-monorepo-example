export * as Asserts from './utils/assertions';
export * as Typeguards from './utils/typeguards';

export const sayHello = (name: string): string => {
  return `I'm the @your-org/ui-lib component telling ${name} !`;
};
