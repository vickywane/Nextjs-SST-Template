import { SSTConfig } from "sst";
import { NextjsSite, Bucket, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "juicebox",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket  = new Bucket(stack, "public", )

      const table = new Table(stack, "waitlist", {
        fields: {
          email: "string",
          createdAt: "number"
        },
        primaryIndex: { partitionKey: "email" },
      })

      const site = new NextjsSite(stack, "site", {
        bind: [ bucket, table ],
        environment: {
          NEXT_PUBLIC_TABLE_NAME: table.tableName
        }
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
