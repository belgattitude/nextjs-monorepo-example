import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    resources: [
      {
        name: 'Remix Docs',
        url: 'https://remix.run/docs',
      },
      {
        name: 'React Router Docs',
        url: 'https://reactrouter.com/docs',
      },
      {
        name: 'Remix Discord',
        url: 'https://discord.gg/VBePs6d',
      },
    ],
    demos: [
      {
        to: 'demos/actions',
        name: 'Actions',
      },
      {
        to: 'demos/about',
        name: 'Nested Routes, CSS loading/unloading',
      },
      {
        to: 'demos/params',
        name: 'URL Params and Error Boundaries',
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix!</h2>
        <p>We're stoked that you're here. 🥳</p>
        <div className="overflow-hidden max-w-sm rounded shadow-lg">
          <div className="h-56 aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="object-cover object-center w-full lg:w-full h-full lg:h-full"
              src={'/sunset.jpg'}
              alt={'Sunhine'}
            />
          </div>
          <article className="py-4 px-6 prose">
            <div className="mb-2 text-xl font-bold">Sunshine at midnight</div>
            <p className="text-indigo-600">By John Doe</p>
            <p className="text-base text-gray-700 line-clamp-4">
              Close to midnight, saw a sunshine
            </p>
          </article>
          <div className="px-6 pt-4 pb-2">
            {['sunset', 'idea', 'travel'].map((keyword) => {
              return (
                <span
                  key={keyword}
                  className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                >
                  #{keyword}
                </span>
              );
            })}
          </div>
        </div>
      </main>
      <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map((demo) => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
