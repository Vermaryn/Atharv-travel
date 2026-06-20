// export default async function AdminDashboard() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/enquiries`,{
//     cache:"no-store"
//   });
//   const data = await res.json();
//   const bookings = data.enquiries.filter((item) => item.type === "booking").length;
//   const contacts = data.enquiries.filter((item) => item.type === "contact-form").length;
//   const plans = data.enquiries.filter((item) => item.type === "custom-plans").length;
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Dashboard
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-lg font-semibold">
//             Total Bookings
//           </h2>
//           <p className="text-3xl font-bold mt-2">{bookings}</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-lg font-semibold">
//             Custom Plans
//           </h2>
//           <p className="text-3xl font-bold mt-2">{plans}</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-lg font-semibold">
//             Contact Messages
//           </h2>
//           <p className="text-3xl font-bold mt-2">{contacts}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function AdminDashboard() {
  return <h1>Admin Working</h1>;
}