import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function PATCH(req, context) {
  try {
    await connectDB();
    const body = await req.json();

    const { id } = await context.params;
    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      { new: true },
    );
    console.log("UPDATED:", enquiry);
    return Response.json({
      succsess: true,
      enquiry,
    });
  } catch (error) {
    return Response.json(
      {
        succsess: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}

