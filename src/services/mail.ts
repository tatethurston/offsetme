import sendgrid from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "../config";

if (SENDGRID_API_KEY) {
  sendgrid.setApiKey(SENDGRID_API_KEY);
}

interface MailOpt<Template, Data> {
  data: Data;
  template: Template;
  to: string;
}

type MailOpts = MailOpt<"magic link", { url: string }>;

interface Email {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

function getEmail(opts: MailOpts): Omit<Email, "to" | "from"> {
  switch (opts.template) {
    case "magic link": {
      return {
        subject: "👋 Signin to OffsetMe",
        text: "sign in",
        html: `<strong>sign in: <a href="${opts.data.url}">sign in link</a></strong>`,
      };
    }
    default: {
      const _exhaust: never = opts.template;
      return _exhaust;
    }
  }
}

export async function mail(opts: MailOpts): Promise<void> {
  const msg = {
    to: opts.to,
    from: "noreply@offsetme.app",
    ...getEmail(opts),
  };

  if (!SENDGRID_API_KEY) {
    console.log("[Mail] would have sent:", msg);
    return;
  }
  try {
    await sendgrid.send(msg);
  } catch (e) {
    console.error(e);
  }
}
