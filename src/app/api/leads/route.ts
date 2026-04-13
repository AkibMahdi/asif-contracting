import { supabase } from '@/lib/supabase';
import twilio from 'twilio';

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  borough?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    if (!body.name?.trim() || !body.phone?.trim()) {
      return Response.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabase.from('leads').insert({
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || null,
      service: body.service || null,
      borough: body.borough || null,
      message: body.message?.trim() || null,
      source: 'website',
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return Response.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      );
    }

    // Send SMS notifications (fire-and-forget)
    sendSmsNotifications(body).catch((err) =>
      console.error('SMS notification failed:', err)
    );

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

async function sendSmsNotifications(lead: LeadPayload): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const ownerNumber = process.env.SMS_NOTIFICATION_NUMBER;

  if (!accountSid || !authToken || !fromNumber || !ownerNumber) {
    return;
  }

  const client = twilio(accountSid, authToken);

  const serviceLine = lead.service ? `\nService: ${lead.service}` : '';
  const boroughLine = lead.borough ? `\nArea: ${lead.borough}` : '';
  const messageLine = lead.message ? `\nDetails: ${lead.message}` : '';

  // SMS #1: Notify business owner
  await client.messages.create({
    body: `New Lead!\nName: ${lead.name}\nPhone: ${lead.phone}${serviceLine}${boroughLine}${messageLine}`,
    from: fromNumber,
    to: ownerNumber,
  });

  // SMS #2: Confirm to the lead
  if (lead.phone) {
    const cleanPhone = lead.phone.replace(/\D/g, '');
    const leadPhone = cleanPhone.startsWith('1') ? `+${cleanPhone}` : `+1${cleanPhone}`;

    await client.messages.create({
      body: `Thank you for contacting Asif Contracting Corp! We received your estimate request and will call you within 2 hours. Questions? Call (718) 686-6550. Reply STOP to opt out.`,
      from: fromNumber,
      to: leadPhone,
    });
  }
}
