const event = `{
  "data": {
    "code": "console.log('Hello from the sandbox!')"
  }
}`;

export default function Home() {
  return (
    <main>
      <p className="eyebrow">Inngest Sandboxes</p>
      <h1>Run code in an isolated Sandbox</h1>
      <p className="intro">
        This starter contains one Inngest function. It creates a Linux Sandbox, runs the
        JavaScript you provide, captures the output, and destroys the Sandbox.
      </p>

      <section>
        <h2>Try it</h2>
        <ol>
          <li>Deploy this app and connect it to a Sandboxes-enabled Inngest environment.</li>
          <li>
            Open <code>run-javascript-in-a-sandbox</code> in the Inngest Dashboard.
          </li>
          <li>Click Invoke and use this payload:</li>
        </ol>
        <pre>
          <code>{event}</code>
        </pre>
      </section>

      <section>
        <h2>What to read</h2>
        <p>
          The complete example is in <code>src/inngest/functions/run-javascript.ts</code>.
          The Sandbox middleware is enabled in <code>src/inngest/client.ts</code>.
        </p>
      </section>

      <aside>
        Sandboxes are currently an experimental beta. Use them for evaluation and feedback,
        not production workloads or data you cannot recreate.
      </aside>
    </main>
  );
}
