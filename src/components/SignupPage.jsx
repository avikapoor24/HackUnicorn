import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accno, setAccno] = useState("");
  const [address, setAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAccountNoChange = (e) => {
    setAccno(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAccountBalanceChange = (e) => {
    setAccountBalance(Number(e.target.value));
  };

  const handleRecentTransactionsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTransactions = [...recentTransactions];
    updatedTransactions[index][name] = value;
    setRecentTransactions(updatedTransactions);
  };

  const handleAddTransaction = () => {
    setRecentTransactions([
      ...recentTransactions,
      { type: "", sender: "", recipient: "", amount: "", date: "" },
    ]);
  };

  const handleRemoveTransaction = (index) => {
    const updatedTransactions = [...recentTransactions];
    updatedTransactions.splice(index, 1);
    setRecentTransactions(updatedTransactions);
  };

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        accno,
        address,
        accountBalance,
        recentTransactions,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "Ok!") {
      navigate("/login");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-9xl font-bold text-white mb-4">Signup</h1>
      <h1
        className="text-9xl font-bold cursor-pointer text-white mb-4"
        onClick={() => navigate("/login")}
      >
        Already a user? Login
      </h1>
      <form
        className="bg-gray-100 rounded shadow-lg px-8 py-6 w-8/12"
        onSubmit={registerUser}
      >
        <div className="mb-4">
          <label htmlFor="username" className="block mb-5 text-4xl">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-5 text-4xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-5 text-4xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accno" className="block mb-5 text-4xl">
            Account No.
          </label>
          <input
            type="number"
            id="accno"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={accno}
            onChange={handleAccountNoChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-5 text-4xl">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountBalance" className="block mb-5 text-4xl">
            Account Balance
          </label>
          <input
            type="number"
            id="accountBalance"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={accountBalance}
            onChange={handleAccountBalanceChange}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-4xl">Recent Transactions</h2>
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={`transactionType${index}`}
                className="block mb-2 text-2xl"
              >
                Type
              </label>
              <input
                type="text"
                id={`transactionType${index}`}
                name="type"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={transaction.type}
                onChange={(e) => handleRecentTransactionsChange(e, index)}
              />

              <label
                htmlFor={`transactionSender${index}`}
                className="block mb-2 text-2xl"
              >
                Sender
              </label>
              <input
                type="text"
                id={`transactionSender${index}`}
                name="sender"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={transaction.sender}
                onChange={(e) => handleRecentTransactionsChange(e, index)}
              />

              <label
                htmlFor={`transactionRecipient${index}`}
                className="block mb-2 text-2xl"
              >
                Recipient
              </label>
              <input
                type="text"
                id={`transactionRecipient${index}`}
                name="recipient"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={transaction.recipient}
                onChange={(e) => handleRecentTransactionsChange(e, index)}
              />

              <label
                htmlFor={`transactionAmount${index}`}
                className="block mb-2 text-2xl"
              >
                Amount
              </label>
              <input
                type="number"
                id={`transactionAmount${index}`}
                name="amount"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={transaction.amount}
                onChange={(e) => handleRecentTransactionsChange(e, index)}
              />

              <label
                htmlFor={`transactionDate${index}`}
                className="block mb-2 text-2xl"
              >
                Date
              </label>
              <input
                type="date"
                id={`transactionDate${index}`}
                name="date"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={transaction.date}
                onChange={(e) => handleRecentTransactionsChange(e, index)}
              />

              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                onClick={() => handleRemoveTransaction(index)}
              >
                Remove Transaction
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
