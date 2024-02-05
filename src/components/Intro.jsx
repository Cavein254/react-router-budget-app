import React from "react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import Illustration from "../assets/illustration.jpg";
import { Form } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <div>
        <h1>
          Take Control of
          <span className="accent"> your MONEY</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>

        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={Illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;
