export default async function ContactsPage() {
    const res = await fetch("http://localhost:3000/api/enquiries",{
        cache:"no-store",
    });

    const data = await res.json();

    const contacts = data.enquiries.filter(
        (item) => item.type === "contact-form"
    );

    return(
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
              <th className="p-3 text-left">message</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-b">
                <td className="p-3">{contact.name}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.phone}</td>
                <td className="p-3">{contact.destination}</td>
                <td className="p-3">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}