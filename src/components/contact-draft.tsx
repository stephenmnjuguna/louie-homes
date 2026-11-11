"use client";

import { useState } from "react";

export function ContactDraft({ propertyName }: { propertyName?: string }) {
  const [message, setMessage] = useState(propertyName ? `Hello LOUIE HOMES, I am interested in homes similar to ${propertyName}.` : "Hello LOUIE HOMES, I would like to learn more about your approach.");
  const [status, setStatus] = useState("");

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("Draft copied. No enquiry has been sent.");
    } catch {
      setStatus("Clipboard unavailable. Select and copy the message manually. No enquiry has been sent.");
    }
  }

  return (
    <div className="draft-card">
      <span className="eyebrow">Enquiry draft</span>
      <h2>Start a conversation.</h2>
      <p>Write and copy a message for later. This page does not send or store enquiries.</p>
      <label htmlFor="enquiry-message">Your message</label>
      <textarea id="enquiry-message" value={message} onChange={(event) => { setMessage(event.target.value); setStatus(""); }} rows={6} />
      <button className="button button-dark" type="button" onClick={copyDraft} disabled={!message.trim()}>Copy enquiry draft</button>
      <p className="form-status" role="status">{status}</p>
    </div>
  );
}
