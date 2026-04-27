import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { ContactPayload } from "@/lib/contact";

type ContactNotificationEmailProps = {
  payload: ContactPayload;
};

const main = {
  backgroundColor: "#0b0f18",
  color: "#f7f8fb",
  fontFamily:
    'Geist, "Segoe UI", -apple-system, BlinkMacSystemFont, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "32px 20px",
  maxWidth: "620px",
};

const panel = {
  backgroundColor: "#121826",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  padding: "24px",
};

const label = {
  margin: "0 0 4px",
  color: "#94a3b8",
  fontSize: "12px",
  textTransform: "uppercase" as const,
};

const value = {
  margin: "0 0 18px",
  color: "#f7f8fb",
  fontSize: "15px",
  lineHeight: "24px",
};

export function ContactNotificationEmail({
  payload,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio inquiry from {payload.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={panel}>
            <Heading
              style={{
                color: "#f7f8fb",
                fontSize: "24px",
                lineHeight: "32px",
                margin: "0 0 20px",
              }}
            >
              New portfolio inquiry
            </Heading>
            <Text style={label}>Name</Text>
            <Text style={value}>{payload.name}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{payload.email}</Text>
            <Text style={label}>Company</Text>
            <Text style={value}>{payload.company || "Not provided"}</Text>
            <Hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />
            <Text style={label}>Service</Text>
            <Text style={value}>{payload.service}</Text>
            <Text style={label}>Timeline</Text>
            <Text style={value}>{payload.timeline}</Text>
            <Text style={label}>Message</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap" }}>
              {payload.message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotificationEmail;
