import { useState }
from "react";

import { supabase }
from "../lib/supabase";

function Register() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const register = async () => {

    const { error } =
      await supabase.auth.signUp({

        email,
        password

      });

    if (error) {

      alert(error.message);

    }

    else {

      alert(
        "Account Created 🚀"
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Register
        </h1>

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

        <button onClick={register}>
          Create Account
        </button>

      </div>

    </div>

  );

}

export default Register;
