import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function esc(str: string | undefined) {
  return (str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;width:120px;border-bottom:1px solid #f3f4f6;">${label}</td>
      <td style="padding:12px 16px;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6;">${value}</td>
    </tr>`;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, phone, course, message } = await request.json();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.15em;color:#93c5fd;text-transform:uppercase;">Mindlink Academy</p>
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;">New Enrollment Enquiry</h1>
            <p style="margin:10px 0 0;font-size:14px;color:#bfdbfe;">A prospective student has reached out</p>
          </td>
        </tr>

        <!-- Course badge -->
        <tr>
          <td style="background:#1d4ed8;padding:0 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:14px 0;">
                  <span style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:20px;padding:6px 18px;font-size:13px;font-weight:600;color:#ffffff;letter-spacing:0.04em;">
                    &#127979;&nbsp; ${esc(course) || 'General Enquiry'}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px;">

            <!-- Applicant name -->
            <div style="display:flex;align-items:center;margin-bottom:24px;">
              <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#7c3aed);display:inline-flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;flex-shrink:0;text-align:center;line-height:48px;vertical-align:middle;">
                ${esc(firstName).charAt(0).toUpperCase()}${esc(lastName).charAt(0).toUpperCase()}
              </div>
              <div style="display:inline-block;margin-left:14px;vertical-align:middle;">
                <p style="margin:0;font-size:19px;font-weight:700;color:#111827;">${esc(firstName)} ${esc(lastName)}</p>
                <p style="margin:2px 0 0;font-size:13px;color:#6b7280;">${esc(email)}</p>
              </div>
            </div>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;border-collapse:separate;border-spacing:0;">
              ${row('Full Name', `${esc(firstName)} ${esc(lastName)}`)}
              ${row('Email', `<a href="mailto:${esc(email)}" style="color:#2563eb;text-decoration:none;">${esc(email)}</a>`)}
              ${row('Phone', `<a href="tel:${esc(phone)}" style="color:#2563eb;text-decoration:none;">${esc(phone) || '—'}</a>`)}
              ${row('Course', esc(course) || '—')}
            </table>

            ${message ? `
            <!-- Message -->
            <div style="margin-top:24px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <div style="background:#f8fafc;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;font-size:15px;color:#374151;line-height:1.6;">${esc(message)}</div>
            </div>` : ''}

            <!-- CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${esc(email)}" style="display:inline-block;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:8px;letter-spacing:0.03em;">
                Reply to ${esc(firstName)} &rarr;
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e5e7eb;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This email was generated automatically by the Mindlink Academy website enquiry form.</p>
            <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">&copy; ${new Date().getFullYear()} Mindlink Academy Global. All rights reserved.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mindlinkacademyglobal@gmail.com',
    subject: `New Enquiry: ${esc(course) || 'General'} — ${esc(firstName)} ${esc(lastName)}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
