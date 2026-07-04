import { useState }
from "react";

import { supabase }
from "../lib/supabase";

import { useNavigate }
from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const register = async () => {

    if (!email || !password) {

      alert(
        "Please enter email and password"
      );

      return;

    }

    if (password.length < 6) {

      alert(
        "Password must be at least 6 characters"
      );

      return;

    }

    setLoading(true);

    const { data, error } =
      await supabase.auth.signUp({

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
      "REGISTER SUCCESS",
      data
    );

    alert(
      "Account Created Successfully 🚀"
    );

    navigate("/login");

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Register
        </h1>

        <p>
          Create your Quavron account
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
          onClick={register}
          disabled={loading}
        >
          {
            loading
              ? "Loading..."
              : "Create Account"
          }
        </button>

      </div>

    </div>

  );

}

export default Register;
