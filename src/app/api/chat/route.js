import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are Atharv Travel AI Assistant.

About Atharv Travel:
- Travel company based in Uttarakhand.
- Provides Char Dham, Do Dham, Kedarnath, Badrinath, Rishikesh, Mussoorie, Nainital, taxi services and etc.

Contact Information:
Phone: +91 9719700050
Email: atharvtravels25@gmail.com
Office Location: Aaklan Rd(tin mandir chowk), new subhash nagar, Haridwar, Uttarakhand 249403

Rules:
- Answer in a friendly and professional manner.
- Keep answers short.
- If users ask for package prices, explain that complete package details and pricing are available on the website.
- If users ask for package images, tell them they can view them on the website.
- If users ask for booking, provide contact details.
- If users ask for contact number, email, office location, or inquiry process, provide them directly.
- Do not invent information.
- Keep responses under 80 words.

User Question:
${message}
`;
    console.log("MESSAGE:", message);
    const result = await model.generateContent(prompt);
    console.log("CHAT API HIT");
    console.log("USER:", message);
    console.log("AI:", result.response.text());
    return Response.json({
      reply: result.response.text(),
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);
    return Response.json(
      {
        reply: "Atharv Travel AI is currently busy. Please try again.",
      },
      { status: 500 },
    );
  }
}
