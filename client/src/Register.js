import React, { useState } from "react";
import "./App.css";
import { Navigate } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("aimifirdhausshafie@gmail.com");
  const [customer, setCustomer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { customer } = await fetch("/create-customer", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((r) => {
      return r.json();
    });
    //   function (data) {
    //     // Do something with data
    //   },
    //   function (rejectionReason) {
    //     // 3
    //     console.log(
    //       "Error parsing JSON from response:",
    //       rejectionReason,
    //       responseClone
    //     ); // 4
    //     responseClone
    //       .text() // 5
    //       .then(function (bodyText) {
    //         console.log(
    //           "Received the following instead of valid JSON:",
    //           bodyText
    //         ); // 6
    //       });
    //   }
    // );

    setCustomer(customer);
  };

  if (customer) {
    return <Navigate to="/prices" replace={true} />;
  }

  return (
    <main>
      <h1>Kampong Software</h1>

      <img
        src="https://picsum.photos/280/320?random=4"
        alt="picsum generated"
        width="140"
        height="160"
      />

      <p>Unlimited photo hosting, and more. Cancel anytime.</p>

      <form action="/create-customer" method="post" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
