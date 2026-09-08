import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { runJavaScript } from "@/inngest/functions/run-javascript";

export const runtime = "nodejs";
export const maxDuration = 300;

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [runJavaScript],
});
