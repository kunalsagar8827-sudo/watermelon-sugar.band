import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const ROLE_LABELS = {
  vocals: "Vocals / Lead Singer",
  guitarist: "Guitarist",
  bassist: "Bassist",
  drummer: "Drummer",
  keyboardist: "Keyboardist",
  manager: "Manager",
  "content-creator": "Content Creator",
};

function buildTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

function ownerEmailHtml(data) {
  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "—"],
    ["Address", data.address || "—"],
    ["Gender", data.gender || "—"],
    ["Role", ROLE_LABELS[data.role] || data.role],
    ["Role question answer", data.roleAnswer || "—"],
    ["Skill level", data.skillLevel || "—"],
    ["Clip link", data.clipLink || "—"],
    ["Why join", data.whyJoin || "—"],
  ];
  return `
    <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto">
      <h2 style="color:#111">New Audition Application</h2>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px;border-bottom:1px solid #eee;color:#666;font-size:13px;width:160px">${label}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;color:#111;font-size:14px">${escapeHtml(
              String(value)
            )}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;
}

function applicantEmailHtml(name) {
  const firstName = (name || "").split(" ")[0] || "there";
  return `
    <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;color:#111">
      <h2 style="margin-bottom:4px">Thanks for applying, ${escapeHtml(firstName)}.</h2>
      <p style="color:#444;line-height:1.6">
        Your application for Watermelon Sugar has been received. We're holding
        auditions in October 2026 — we'll reach out to you around then with next steps.
      </p>
      <p style="color:#444;line-height:1.6">
        Until then, follow us on Instagram for updates on the band's build.
      </p>
      <p style="margin-top:24px;color:#888;font-size:13px">— Watermelon Sugar Band</p>
    </div>
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (
      !data.name?.trim() ||
      !data.phone?.trim() ||
      !data.address?.trim() ||
      !data.gender
    ) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, address, and gender are required." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER / EMAIL_PASS environment variables.");
      return NextResponse.json(
        { ok: false, error: "Email is not configured on the server yet." },
        { status: 500 }
      );
    }

    const transporter = buildTransporter();

    await transporter.sendMail({
      from: `"Watermelon Sugar Site" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      replyTo: data.email || undefined,
      subject: `New audition application — ${data.name} (${
        ROLE_LABELS[data.role] || data.role || "role not set"
      })`,
      html: ownerEmailHtml(data),
    });

    if (data.email && data.email.trim()) {
      await transporter.sendMail({
        from: `"Watermelon Sugar Band" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "We've got your application — Watermelon Sugar",
        html: applicantEmailHtml(data.name),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply form error:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "Could not send your application. Please try again in a moment." },
      { status: 500 }
    );
  }
}
