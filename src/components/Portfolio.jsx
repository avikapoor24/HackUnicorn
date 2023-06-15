import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [accNo, setAccNo] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);

  const url = "https://finovatech-data.onrender.com";

  useEffect(() => {
    // Fetch user data from the API or your data source
    // and set the individual state variables accordingly
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${url}/api/user`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });

        const data = await res.json();
        if (data.status === "ok") {
          const user = data.user;
          setUsername(user.username);
          setEmail(user.email);
          setAddress(user.address);
          setAccNo(user.accno);
          setAccountBalance(user.accountBalance);
          setRecentTransactions(user.recentTransactions);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-blue-200 rounded-lg shadow-xl p-8 max-w-4xl w-full transition duration-500 ease-in transform hover:shadow-2xl">
        <h1 className="text-5xl font-bold mb-8">Portfolio</h1>

        {username ? (
          <div>
            <h2 className="text-3xl font-bold mb-6">Username: {username}</h2>
            <p className="text-xl mb-4">Email: {email}</p>
            <p className="text-xl mb-4">Address: {address}</p>
            <p className="text-xl mb-4">Account Number: {accNo}</p>
            <p className="text-xl mb-4">Account Balance: ${accountBalance}</p>

            <h3 className="text-3xl font-bold mt-8 mb-6">Recent Transactions:</h3>
            <ul>
              {recentTransactions.map((transaction, index) => (
                <li key={index} className="mb-4">
                  <p className="text-xl">Date: {transaction.date}</p>
                  <p className="text-xl">Amount: ${transaction.amount}</p>
                  {transaction.recipient && <p className="text-xl">Recipient: {transaction.recipient}</p>}
                  {transaction.sender && <p className="text-xl">Sender: {transaction.sender}</p>}
                  <p className="text-xl">Type: {transaction.type}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
