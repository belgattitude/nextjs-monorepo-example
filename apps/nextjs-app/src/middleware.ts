// @link https://nextjs.org/docs/app/building-your-application/routing/middleware

import { withAuth } from 'next-auth/middleware';

type MiddlewareEnabledRouteMatchers = (typeof middlewareEnabledRoutes)[number];

const middlewareEnabledRoutes = [
  '/admin/:path*',
  '/profile/:path*',
  '/test',
] as const;

const adminAuthRoutes: MiddlewareEnabledRouteMatchers[] = [
  '/admin/:path*',
  '/test',
];

const isAdminRoute = (
  pathName: string,
  adminRoutes: MiddlewareEnabledRouteMatchers[]
): boolean => {
  return adminRoutes.some((routePrefix) => {
    const path = pathName.toLowerCase().trim();
    if (routePrefix.endsWith(':path*')) {
      return pathName.startsWith(routePrefix.slice(0, -7));
    }
    return path === routePrefix;
  });
};

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const { pathname } = req.nextUrl;
      return (
        !isAdminRoute(pathname, adminAuthRoutes) || token?.role === 'admin'
      );
    },
  },
});

export const config = { matcher: [...middlewareEnabledRoutes] };
