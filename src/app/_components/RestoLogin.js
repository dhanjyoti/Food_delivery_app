import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RestotLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    try {
      let response = await fetch("http://localhost:3000/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, login: true }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const responseData = await response.json();

      if (responseData.success) {
        const { result } = responseData; // Extract result from responseData
        if (result) {
          delete result.password;
          localStorage.setItem("restaurantUser", JSON.stringify(result));
        }
        router.push("/restaurant/dashboard"); // Correct navigation
        alert("Login Successful");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h3>Login Component</h3>
      <div>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          className="border border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && !email && (
          <span className="text-red-500 text-xs absolute pl-3">
            Please enter Valid Email
          </span>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          className="border border-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && !password && (
          <span className="text-red-500 text-xs absolute pl-3">
            Please enter Password
          </span>
        )}
      </div>
      <div>
        <button className="border border-gray-700" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
