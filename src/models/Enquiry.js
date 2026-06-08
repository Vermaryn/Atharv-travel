import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    destination: String,
    travelDate: String,
    message: String,
    travelers:String,
    type:String,
    status: {
        type: String,
        default:"new"
    }
},
{ timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);