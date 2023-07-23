// @link https://nextjs.org/docs/app/building-your-application/routing/middleware

import { withAuth } from 'next-auth/middleware';

type MiddlewareEnabledRouteMatchers = (typeof config.matcher)[number];

export const config = {
  matcher: [
    '/admin/:path*',
    // '/profile/:path*'
  ],
};

const adminAuthRoutes: MiddlewareEnabledRouteMatchers[] = ['/admin/:path*'];

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
