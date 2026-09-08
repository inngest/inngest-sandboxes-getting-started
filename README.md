# Inngest Sandboxes Getting Started

Run JavaScript inside an isolated Linux Sandbox from a durable Inngest function.

> [!WARNING]
> Inngest Sandboxes are currently an experimental beta. Access is enabled manually, and APIs, limits, and behavior can change. Use the beta for evaluation and feedback, not production workloads or data you cannot recreate.

## What this example does

The included function:

1. creates a Sandbox;
2. runs JavaScript supplied in an event;
3. captures stdout, stderr, and the exit code; and
4. destroys the Sandbox.

Each Sandbox operation is a durable Inngest step, so completed operations are memoized and visible in the function run.

## Deploy it

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Finngest%2Finngest-sandboxes-getting-started&redirect-url=https%3A%2F%2Fapp.inngest.com%2Fintegrations%2Fvercel&integration-ids=oac_H9biZULoTuJYFO32xkUydDmT)

You need an Inngest environment with Sandboxes beta access. Connect the deployed app to that environment through the Inngest Vercel integration, then sync its `/api/inngest` endpoint.

## Run the example

Open `run-javascript-in-a-sandbox` in the Inngest Dashboard, click **Invoke**, and use this payload:

```json
{
  "data": {
    "code": "console.log('Hello from the sandbox!')"
  }
}
```

The completed function returns:

```json
{
  "sandboxId": "...",
  "stdout": "Hello from the sandbox!\n",
  "stderr": "",
  "exitCode": 0
}
```

Open the run to inspect the create, command, and destroy steps.

## Run the Next.js app locally

```bash
npm install
INNGEST_DEV=1 npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `INNGEST_DEV=1` keeps the local `/api/inngest` endpoint in development mode. Sandboxes are a cloud resource during the beta, so deploy and invoke the function through a Sandboxes-enabled Inngest Cloud environment to run the complete lifecycle.

## Project layout

```text
src/
├── app/
│   ├── api/inngest/route.ts       # Serves the Inngest function
│   └── page.tsx                   # A minimal starting page
└── inngest/
    ├── client.ts                  # Enables Sandbox middleware
    └── functions/
        └── run-javascript.ts      # Creates, uses, and destroys a Sandbox
```

## Important limitations

- Sandbox access and capacity are limited during the beta.
- Sandboxes are ephemeral. Persist anything important outside the Sandbox.
- Environment variables passed to a Sandbox are ordinary guest configuration, not a secrets system.
- Do not automatically retry an `operation_ambiguous` error without first reconciling the operation's effects.
- The beta exposes fixed resource configurations and a default image; some infrastructure options are not user-configurable.
- Protect any application endpoint that lets users submit code or create Sandboxes. This starter intentionally triggers its example through Inngest instead of exposing a public code-execution form.

## Learn more

- [Inngest documentation](https://www.inngest.com/docs)
- [Next.js quick start](https://www.inngest.com/docs/getting-started/nextjs-quick-start)
