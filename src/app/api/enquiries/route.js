import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";


export async function GET(req){
    try{
        await connectDB();
        const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });
        return Response.json({
            success: true,
            enquiries,
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message,
        }, { status: 500 });
    }
}
export async function POST(req){
    try{
        const body = await req.json();
        await connectDB();
        
        const enquiry = await Enquiry.create(body);

        return Response.json({ 
            success: true,
            enquiry,
        });
    } catch (error){
        return Response.json({
            success: false,
            error: error.message,
        },
        { status: 500 }
    );
    }
}
