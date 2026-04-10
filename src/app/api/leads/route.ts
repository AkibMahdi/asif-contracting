import { supabase } from '@/lib/supabase';

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

    // TODO: Add Twilio SMS notification when credentials are available
    // Install twilio: npm install twilio
    // Then uncomment and configure SMS sending here

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
