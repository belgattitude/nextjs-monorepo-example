import Ky, { type Options, type NormalizedOptions } from 'ky';

type Props = {
  baseUrl?: string;
  onAuthFailure?: (
    request: Request,
    options: NormalizedOptions,
    response: Response
  ) => Promise<void>;
};

export class KyFactory {
  constructor(private props: Props) {}
  create = (options?: Omit<Options, 'hooks'>): typeof Ky => {
    const hooks: Options['hooks'] =
      this.props.onAuthFailure === undefined
        ? {}
        : {
            afterResponse: [
              async (request, options, response): Promise<Response> => {
                const { status } = response;
                if (
                  [401, 403].includes(status) &&
                  this.props.onAuthFailure !== undefined
                ) {
                  await this.props.onAuthFailure(request, options, response);
                }
                return response;
              },
            ],
          };

    return Ky.create({
      prefixUrl: this.props.baseUrl,
      ...options,
      hooks: hooks,
    });
  };
}
