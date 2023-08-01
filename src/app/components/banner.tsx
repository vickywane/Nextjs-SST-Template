"use client";
import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [isUserSubscribed, markUserAsSubscribed] = useState(false);

  const subscribeUser = (e: any) => {
    e.preventDefault();

    try {
      markUserAsSubscribed(!isUserSubscribed);
    } catch (e) {}
  };

  return (
    <section>
      {!isUserSubscribed ? (
        <div>
          <h1 className={"text-center text-8xl font-bold"}>
            {" "}
            JuiceBox Is Coming Soon!{" "}
          </h1>
          <p className={"text-gray-300 text-center mt-8 max-w-[500px] m-auto"}>
            Introducing <span className="font-bold"> JuiceBox </span> - Your
            Ultimate Juice Commerce <br />
            <br />
            We believe in the power of pure, natural ingredients bursting with
            flavor and health benefits. Our juice making commerce service brings
            the fresh and vibrant juices right to your doorstep,
            making it easier than ever to embrace a healthy lifestyle.
          </p>

          <br />

          <form className={"flex justify-center"}>
            <div className={"flex justify-center"}>
              <input
                className={
                  "w-[450px] bg-gray-200 text-[#000] h-[55px] rounded px-2"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Please enter your email address"}
              />
            </div>

            <div className={"ml-6"}>
              <button
                className={"h-[55px] border rounded px-12"}
                onClick={subscribeUser}
              >
                Add Me To Waitlist
              </button>
            </div>
          </form>

          <p className={"mt-8 text-center text-gray-400"}>
            {" "}
            Notify Me On App Launch!{" "}
          </p>
        </div>
      ) : (
        <div>
          <h1 className={"text-center text-6xl font-bold"}>
            {" "}
            You Are In The Waitlist!{" "}
          </h1>
          <p className={"text-gray-300 text-center mt-8 max-w-[500px] m-auto"}>
            We have been added you to our waitlist. Immediately the app
            launches, you will be the first to know!
          </p>
        </div>
      )}
    </section>
  );
};

export default Banner;