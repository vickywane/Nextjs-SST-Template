import { SSTConfig } from "sst";
import { NextjsSite, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "juicebox",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const table = new Table(stack, "waitlist", {
        fields: {
          id: "string",
          email: "string",
          createdAt: "number"
        },
        primaryIndex: { partitionKey: "email" },
      })

      const site = new NextjsSite(stack, "site", {
        bind: [ table ],
      });

      site.attachPermissions(
          [table]
      )

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
