import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  debug: true,
  publicRoutes: ['/', '/sign-in', 'sign-up']
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
