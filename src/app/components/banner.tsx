"use client";
import React, { useState } from "react";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  UpdateCommand,
  PutCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

// async function subscribe(e : any, email: string) {
//   e.preventDefault();

//   const region = "us-east-2";

//   try {
//     const db = DynamoDBDocumentClient.from(
//       new DynamoDBClient({
//         region,
//       })
//     );

//     const update = new PutCommand({
//       TableName: Table.waitlist.tableName,
//       Item: {
//         email
//       }
//     });

//     await db.send(update);

//     // markUserAsSubscribed(!isUserSubscribed)
//   } catch (e) {
//     console.log("CREATE ERROR:", e);
//   }
// }

export default function  Banner () {
  const [email, setEmail] = useState("");
  const [isUserSubscribed, markUserAsSubscribed] = useState(false);

  return (
    <section>
      {!isUserSubscribed ? (
        <div>
          <h1 className={"text-center text-8xl font-bold"}>
            {" "}
            JuiceBox Is Coming Soon!{" "}
          </h1>
          <p className={"text-gray-300 text-center mt-8 max-w-[500px] m-auto"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            printing and typesetting printing and typesetting industry.
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
                onClick={(e) => subscribe(e, email)}
              >
                Notify Me
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

// export default async Banner;
