"use client";

export default function StatusSelect({ id, status }) {
  const updateStatus = async (value) => {
    await fetch(`/api/enquiries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: value,
      }),
    });

    window.location.reload();
  };
  return (
    <select
      value={status || "new"}
      onChange={(e) => updateStatus(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="new">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Confirmed">Confirmed</option>
      <option value="Closed">Closed</option>
    </select>
  );
}
