import React, { useEffect, useState } from "react";

const UserDetail = ({ email, password }) => {
  const [user, setUser] = useState(null);

  async function fetchData() {
    const res = await fetch("http://localhost:4000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.status === "ok") {
      setUser(data.user);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [email, password]);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Account Number: {user.accountNumber}</p>
      <p>Account Balance: ${user.accountBalance}</p>
      <h2>Recent Transactions:</h2>
      <ul>
        {user.recentTransactions.map((transaction, index) => (
          <li key={index}>
            <p>Date: {transaction.date}</p>
            <p>Amount: ${transaction.amount}</p>
            {transaction.type === "Purchase" && (
              <p>Recipient: {transaction.recipient}</p>
            )}
            {transaction.type === "Payment" && (
              <p>Sender: {transaction.sender}</p>
            )}
            {transaction.type === "Bill Payment" && (
              <p>Recipient: {transaction.recipient}</p>
            )}
            {transaction.type === "Dividend" && (
              <p>Sender: {transaction.sender}</p>
            )}
            {transaction.type === "Gift" && (
              <p>Sender: {transaction.sender}</p>
            )}
            {transaction.type === "Vacation Booking" && (
              <p>Recipient: {transaction.recipient}</p>
            )}
            {transaction.type === "Bonus" && (
              <p>Sender: {transaction.sender}</p>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetail;
