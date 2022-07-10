import { useState } from "react";
import "./SignIn.css";

const SignIn = (props) => {
  const [getUser, updatedUser] = useState("");
  const [getPassword, updatedPassword] = useState("");

  const details = [["dorin", "123"], ["ana", '1234']];

  const usernameHandler = (event) => {
    updatedUser(event.target.value);
  };

  const passwordHandler = (event) => {
    updatedPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (details.flat().includes(getUser) &&  details.flat()[details.flat().indexOf(getUser) + 1] === getPassword) {
      props.start();
    } else {
      alert("Wrong Username or Password");
      updatedPassword('');
      updatedUser('');
    }
  };

  return (
    <div>
      <div className="login-box">
        <div className="title">Sign in to Expenses Tracker</div>
        <form onSubmit={submitHandler}>
          <div>Username</div>
          <input
            value={getUser}
            className="fill"
            type="text"
            onChange={usernameHandler}
            required
          />
          <div>Password</div>
          <input
            value={getPassword}
            className="fill"
            type="password"
            onChange={passwordHandler}
            required
          />
          <button className="btn2" type="submit" value="SignIn">
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
