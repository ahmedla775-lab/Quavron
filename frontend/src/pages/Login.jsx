import { useState } from "react";

import { supabase }
from "../lib/supabase";

import { useNavigate }
from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const login = async () => {

    if (!email || !password) {

      alert(
        "Please enter email and password"
      );

      return;

    }

    setLoading(true);

    const { data, error } =
      await supabase.auth.signInWithPassword({

        email,
        password

      });

    setLoading(false);

    if (error) {

      alert(error.message);

      console.error(error);

      return;

    }

    console.log(
      "LOGIN SUCCESS",
      data
    );

    alert("Login Success 🚀");

    navigate("/");

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Login
        </h1>

        <p>
          Login to continue using Quavron
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          disabled={loading}
        >
          {
            loading
              ? "Loading..."
              : "Login"
          }
        </button>

      </div>

    </div>

  );

}

export default Login;
