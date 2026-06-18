import StatusSelect from "../bookings/StatusSelect";
export default async function Customplan() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/enquiries`, {
    cache: "no-store",
  });
  const data = await res.json();

  const plans = data.enquiries.filter((item) => item.type === "custom-plans");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Custom-plan</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Destination</th>
              <th className="p-3 text-left">Travel Date</th>
              <th className="p-3 text-left">message</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <tr key={plan._id} className="border-b">
                <td className="p-3">{plan.name}</td>
                <td className="p-3">{plan.email}</td>
                <td className="p-3">{plan.phone}</td>
                <td className="p-3">{plan.destination}</td>
                <td className="p-3">{plan.travelDate}</td>
                <td className="p-3">{plan.message}</td>
                <td className="p-3">
                  <StatusSelect id={plan._id} status={plan.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
