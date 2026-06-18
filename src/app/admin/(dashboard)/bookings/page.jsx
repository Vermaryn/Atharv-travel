
import StatusSelect from "./StatusSelect";
export default async function Bookings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/enquiries`, {
    cache: "no-store",
  });

  const data = await res.json();

  const bookings = data.enquiries.filter((item) => item.type === "booking");
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Destination</th>
              <th className="p-3 text-left">travelers</th>
              <th className="p-3 text-left">message</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-b">
                <td className="p-3">{booking.name}</td>
                <td className="p-3">{booking.phone}</td>
                <td className="p-3">{booking.destination}</td>
                <td className="p-3">{booking.travelers}</td>
                <td className="p-3">{booking.message}</td>
                <td className="p-3">
                  <StatusSelect id={booking._id} status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
