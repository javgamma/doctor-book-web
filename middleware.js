// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default function middleware(req) {
//   return withAuth(req);
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };


// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// export default withAuth({
//     protectedRoutes: ["/search/Dentist"]
// });
// export const config = {
//   matcher: ["/dashboard", "/profile", "/search/Dentist"],
// };

//------ESTA ESTA BUENA ---------

// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//   const { isAuthenticated } = getKindeServerSession();
//   if (!(await isAuthenticated())) {
//     redirect("/api/auth/login");
//   return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))

// }
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/details/:path*'],
// }
/// --------**** HASTA AQUI ******

//// ____ UTLTIMA CONFIG QUE ESTABA USANDO ------
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import { NextResponse } from 'next/server';

// export async function middleware(request) {
//   const session = await getKindeServerSession();
  
//   if (!session?.isAuthenticated()) {
//     return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url));
//   }

//   return NextResponse.next();  // Si el usuario está autenticado, continuar con la solicitud.
// }

// export const config = {
//   matcher: ['/details/:path*'], // Aplica el middleware a rutas que comiencen con /details/
// };

///-------------_____________---------


import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const session = await getKindeServerSession(request);

  if (!session?.isAuthenticated()) {
    const loginUrl = new URL('/api/auth/login', request.url);
    // Añadir redirección después del login con la página protegida a la que quieres llevar al usuario
    loginUrl.searchParams.set('post_login_redirect_url', '/protected-page');
    
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Si el usuario está autenticado, continuar con la solicitud
}

export const config = {
  matcher: ['/details/:path*', '/dashboard', '/profile'], // Rutas protegidas
};

