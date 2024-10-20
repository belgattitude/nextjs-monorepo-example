import type { FC } from 'react';
import { vi } from 'vitest';
import { render, screen, act, renderHook, waitFor } from '@/test-utils';
import { usePromise } from '../use-promise';

describe('usePromise', () => {
  describe('hook', () => {
    it('should load, return the promise response and rerender', async () => {
      const deps = { slug: 'b' };
      const expected = { value: 'cool' };
      type Deps = typeof deps;
      const callback = vi.fn();
      const promiseFn = async (deps: Deps) => {
        callback(deps);
        return expected;
      };

      const { result, rerender } = renderHook(() =>
        usePromise(promiseFn, deps)
      );
      // initial data
      const initialValue = result.current;
      expect(result.current.data).toBeNull();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeNull();

      // resolved data
      await waitFor(() => {
        expect(result.current).not.toBe(initialValue);
      });

      expect(callback).toHaveBeenCalledTimes(1);

      expect(result.current.data).toStrictEqual(expected);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();

      rerender();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(result.current.data).toStrictEqual(expected);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it('should set error when promise fails', async () => {
      const callback = vi.fn();
      // eslint-disable-next-line @typescript-eslint/require-await
      const promiseFn = async () => {
        callback();
        throw new Error('cool');
      };

      const { result } = renderHook(() => usePromise(promiseFn, {}));

      // initial data
      const initialValue = result.current;
      expect(result.current.data).toBeNull();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeNull();

      // resolved data
      await waitFor(() => {
        expect(result.current).not.toBe(initialValue);
      });

      expect(callback).toHaveBeenCalledTimes(1);
      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error?.message).toBe('cool');
    });

    it('should call the promise when forceReload is called', async () => {
      const callback = vi.fn();
      const promiseFn = async () => {
        callback();
        return 0;
      };

      const { result } = renderHook(() => usePromise(promiseFn, {}));
      // initial data
      const initialValue = result.current;
      expect(result.current.data).toBeNull();
      expect(result.current.isLoading).toBe(true);
      expect(result.current.error).toBeNull();

      // resolved data
      await waitFor(() => {
        expect(result.current).not.toBe(initialValue);
      });

      expect(callback).toHaveBeenCalledTimes(1);

      act(() => {
        result.current.reload();
      });

      await waitFor(() => {
        expect(result.current).not.toBe(initialValue);
      });

      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe('component', () => {
    describe('react.FC usage', () => {
      type Params = { query: string };
      type LoaderPromise = (params: Params) => Promise<string>;
      type Props = {
        asyncFn: LoaderPromise;
        params: Params;
      };
      const MyComp: FC<Props> = ({ asyncFn, params }) => {
        const { data } = usePromise(asyncFn, params);
        return <div data-testid={'content'}>{data}</div>;
      };

      it('should conditionally call the promise based on deps changes', async () => {
        // Arrange
        const promise = Promise.resolve();
        const handleLoading = vi.fn(() => promise);
        const loadData = async (deps: Params) => {
          await handleLoading();
          return deps.query;
        };

        // Act
        const { rerender } = render(
          <MyComp asyncFn={loadData} params={{ query: 'query1' }} />
        );
        await act(() => promise);

        // Assert
        expect(screen.getByTestId('content').textContent).toBe('query1');
        expect(handleLoading).toHaveBeenCalledTimes(1);

        // 1. Promise should be called on deps changes
        rerender(<MyComp asyncFn={loadData} params={{ query: 'query2' }} />);
        await act(() => promise);
        expect(screen.getByTestId('content').textContent).toBe('query2');
        expect(handleLoading).toHaveBeenCalledTimes(2);

        // 2. Promise should not be called if deps have not changed
        rerender(<MyComp asyncFn={loadData} params={{ query: 'query2' }} />);
        await act(() => promise);
        expect(screen.getByTestId('content').textContent).toBe('query2');
        expect(handleLoading).toHaveBeenCalledTimes(2);
      });

      it('should call the promise if changed', async () => {
        // Arrange
        const promise = Promise.resolve();
        const handleLoading1 = vi.fn(() => promise);
        const handleLoading2 = vi.fn(() => promise);
        const loadData1 = async (deps: Params) => {
          await handleLoading1();
          return deps.query;
        };
        const loadData2 = async (deps: Params) => {
          await handleLoading2();
          return deps.query;
        };

        // Act & Assert
        const { rerender } = render(
          <MyComp asyncFn={loadData1} params={{ query: 'q' }} />
        );
        await act(() => promise);
        expect(handleLoading1).toHaveBeenCalledTimes(1);
        expect(handleLoading2).toHaveBeenCalledTimes(0);

        rerender(<MyComp asyncFn={loadData2} params={{ query: 'q' }} />);
        await act(() => promise);
        expect(handleLoading1).toHaveBeenCalledTimes(1);
        expect(handleLoading2).toHaveBeenCalledTimes(1);

        rerender(<MyComp asyncFn={loadData1} params={{ query: 'q' }} />);
        await act(() => promise);
        expect(handleLoading1).toHaveBeenCalledTimes(2);
        expect(handleLoading2).toHaveBeenCalledTimes(1);
      });
    });
  });
});
