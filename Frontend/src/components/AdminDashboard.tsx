import { useEffect, useState } from "react";

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<any>(null);

  const getEnquiries = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/enquiries");
      const data = await response.json();

      setEnquiries(data);
    } catch (error) {
      console.log("Error getting enquiries");
    }
  };

  useEffect(() => {
    getEnquiries();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`http://localhost:5000/api/enquiries/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });

      getEnquiries();
    } catch (error) {
      console.log("Error updating status");
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) {
      return;
    }

    try {
      await fetch(`http://localhost:5000/api/enquiries/${id}`, {
        method: "DELETE"
      });

      getEnquiries();
    } catch (error) {
      console.log("Error deleting enquiry");
    }
  };

  const filteredEnquiries = enquiries.filter((enquiry) => {
  const searchText = search.toLowerCase();

  const searchMatch =
    enquiry.name.toLowerCase().includes(searchText) ||
    enquiry.email.toLowerCase().includes(searchText);

  const filterMatch =
    filter === "All" || enquiry.userType === filter;

  return searchMatch && filterMatch;
});
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <input
        className="search"
        placeholder="Search name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
  className="filter"
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
  <option value="All">All</option>
  <option value="Student">Student</option>
  <option value="Customer">Customer</option>
  <option value="Other">Other</option>
</select>

      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEnquiries.map((enquiry) => (
              <tr key={enquiry._id}>
                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.userType}</td>
                <td>{enquiry.interest}</td>

                <td>
                  <select
                    value={enquiry.status}
                    onChange={(e) =>
                      updateStatus(enquiry._id, e.target.value)
                    }
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>In Progress</option>
                    <option>Closed</option>
                  </select>
                </td>

                <td>
                  <button onClick={() => setSelected(enquiry)}>
                    View
                  </button>

                  <button onClick={() => deleteEnquiry(enquiry._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredEnquiries.length === 0 && (
          <p>No enquiries found.</p>
        )}
      </div>

      {selected && (
        <div className="details">
          <h3>Enquiry Details</h3>

          <p><b>Name:</b> {selected.name}</p>
          <p><b>Email:</b> {selected.email}</p>
          <p><b>Phone:</b> {selected.phone}</p>
          <p><b>User Type:</b> {selected.userType}</p>
          <p><b>Interest:</b> {selected.interest}</p>
          <p><b>Message:</b> {selected.message}</p>
          <p><b>Status:</b> {selected.status}</p>

          <button onClick={() => setSelected(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;