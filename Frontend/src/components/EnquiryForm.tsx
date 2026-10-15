import { useState } from "react";

function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("Student");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

   if (!name || !email || !phone || !interest || !message) {
  setResult("Please fill all the fields.");
  return;
}

if (!/^[6-9][0-9]{9}$/.test(phone)) {
  setResult("Please enter a valid phone number");
  return;
}
    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          userType,
          interest,
          message
        })
      });

      if (response.ok) {
        setResult("Enquiry submitted successfully.");

        setName("");
        setEmail("");
        setPhone("");
        setUserType("Student");
        setInterest("");
        setMessage("");
      } else {
        setResult("Failed to submit enquiry.");
      }
    } catch (error) {
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="enquiry">
      <h2>Contact Us</h2>
      <p>Submit your enquiry and our team will contact you.</p>

      <form onSubmit={submitForm}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
  type="tel"
  placeholder="Phone"
  value={phone}
  maxLength={10}
  onChange={(e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  }}
/>

        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option>Student</option>
          <option>Customer</option>
          <option>Other</option>
        </select>

        <input
          placeholder="Service or Course"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Submit Enquiry</button>
      </form>

      {result && <p>{result}</p>}
    </div>
  );
}

export default EnquiryForm;