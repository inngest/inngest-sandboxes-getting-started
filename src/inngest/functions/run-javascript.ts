import { inngest } from "../client";

export const runJavaScript = inngest.createFunction(
  {
    id: "run-javascript-in-a-sandbox",
    triggers: { event: "sandbox/code.requested" },
  },
  async ({ event, step, runId }) => {
    const sandbox = await step.sandbox.create("create-sandbox", {
      name: `getting-started-${runId.toLowerCase()}`,
      vcpu: 2,
      memoryMb: 2048,
    });

    const result = await sandbox.commands.run(
      "run-javascript",
      ["/usr/bin/env", "node", "-e", event.data.code],
      { timeout: "30s" },
    );

    await sandbox.destroy("destroy-sandbox");

    return {
      sandboxId: sandbox.id,
      stdout: result.stdout,
      stderr: result.stderr,
      exitCode: result.exitCode,
    };
  },
);
