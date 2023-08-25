import { ofetch } from 'ofetch';

/**
 * Custom fetcher to be used for ingestion api calls
 */
export const apiFetcher = ofetch.create({
  // baseURL: '',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
  retry: 2,
  /**
   * By setting the FETCH_KEEP_ALIVE environment variable to true, an http/https agent will be registered that
   * keeps sockets around even when there are no outstanding requests, so they can be used for future requests
   * without having to reestablish a TCP connection.
   *
   * Note: This option can potentially introduce memory leaks.
   * Please check https://github.com/node-fetch/node-fetch/pull/1325 for more details.
   */
  keepalive: true,

  /*
  async onRequest({ request, options }) {
    // Nothing yet
  },

  async onRequestError({ request, options, error }) {
    // Nothing yet
  },

  async onResponseError({ request, response, options }) {
    // Nothing yet
  }, */
});
