// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default function middleware(req) {
//   return withAuth(req);
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default withAuth({
    protectedRoutes: ["/search/Dentist"]
});
export const config = {
  matcher: ["/dashboard", "/profile", "/search/Dentist"],
};