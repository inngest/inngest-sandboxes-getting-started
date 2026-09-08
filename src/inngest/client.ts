import { Inngest } from "inngest";
import { sandboxMiddleware } from "inngest/experimental";

export const inngest = new Inngest({
  id: "inngest-sandboxes-getting-started",
  middleware: [sandboxMiddleware()],
});
