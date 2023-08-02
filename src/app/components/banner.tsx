"use client";
import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState({
    isSubscribed: false,
    status: ""
  });
  const [loading, setLoading] = useState(false);

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    try {
       
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {!subscribe.isSubscribed ? (
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
            the fresh and vibrant juices right to your doorstep, making it
            easier than ever to embrace a healthy lifestyle.
          </p>

          <br />

          <form className={"flex justify-center"}>
            <div className={"flex justify-center"}>
              <input
                disabled={loading}
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
                disabled={loading}
                className={"h-[55px] border rounded px-12"}
                onClick={subscribeUser}
              >
                {!loading ? "Add Me To Waitlist" : "Adding You..."}
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
            {subscribe.status}
          </p>
          <p className={"text-gray-300 text-center mt-4 max-w-[500px] m-auto"}>
            Immediately JuiceBox launches, you will be the first to know!
          </p>
        </div>
      )}
    </section>
  );
};

export default Banner;