import { cookies } from "next/headers";
export async function POST(req) {
    try{
        const body = await req.json();

        if(
            body.email === process.env.ADMIN_EMAIL &&
            body.password === process.env.ADMIN_PASSWORD
        ){
            const cookiesStore = await cookies();
            cookiesStore.set("admin-auth", "true",{
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
                maxAge:60*60*24,
                path:"/",
            })
            return Response.json({
                success:true,
            })
        }
        return Response.json(
            {
                success:false,
                message:"Invalid credentials"
            },
            {status:401}
        );

    }catch(error){
        return Response.json(
            {
                success:false,
                error:error.message,
            },
            { status: 500}
        )
    }
}