import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    console.log("SUBSCRIBE ROUTE HIT");
  try {
    await connectDB();

    const { email } = await req.json();

    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return Response.json({
        message: "You are already subscribed",
      });
    }

    await Subscriber.create({ email });
    console.log("Sending email...");
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Atharv Travel",
      html: `
        <h2>Welcome to Atharv Travel!</h2>
        <p>Thank you for subscribing.</p>
        <p>You will receive travel updates and offers.</p>
      `,
    });
    if(result.error){
      return Response.json({
        success:false,
        message: result.error.message,
      });
    }
    console.log(result);
    console.log("Email sent");
    return Response.json({
      success: true,
      message: "Subscribed successfully!",
    });
    
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

