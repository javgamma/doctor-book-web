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

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    // redirect("/api/auth/login");
  return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))
  // ?post_login_redirect_url=/
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/details/:path*'],
}
/// --------**** HASTA AQUI ******



// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextResponse } from 'next/server';

// export default async function GET(request) {
//   try {
//     const { getUser, isAuthenticated } = getKindeServerSession();
//     const user = await getUser();
//     const authenticated = await isAuthenticated();

//     if (!authenticated) {
//       // return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
//       // return NextResponse.redirect(new URL('/api/auth/login', request.url));  Esta esta redireccionando constantemente
//     }

//     // Aquí puedes realizar cualquier configuración necesaria para el usuario
//     // Por ejemplo, crear un perfil en tu base de datos si no existe

//     return NextResponse.json({
//       message: 'Setup completado con éxito',
//       user: {
//         id: user.id,
//         email: user.email,
//         // Incluye cualquier otra información del usuario que necesites
//       }
//     });
//   } catch (error) {
//     console.error('Error en el setup:', error);
//     return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
//   }
// }