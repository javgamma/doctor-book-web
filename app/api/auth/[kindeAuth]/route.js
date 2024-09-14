// import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
// // export const GET = handleAuth();
// export default handleAuth();
// // export const GET = handleAuth();

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();
export const POST = handleAuth();
export const PUT = handleAuth();
export const DELETE = handleAuth();

