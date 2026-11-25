"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  configuration: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", phone: "", configuration: "", message: "" };

export default function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<FormValues> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number.";
    if (!values.configuration) nextErrors.configuration = "Select a configuration.";
    if (values.message.trim().length < 10) nextErrors.message = "Tell us a little more (10 characters minimum).";
    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center border border-line bg-paper p-8 text-center">
        <CheckCircle2 size={42} strokeWidth={1.2} className="text-olive" />
        <p className="eyebrow mt-8">Sample enquiry received</p>
        <h2 className="mt-5 text-4xl">Thank you for your interest.</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-olive">This is a portfolio demonstration. No details were transmitted, stored, or shared with a sales team.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline mt-8">Send another sample</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-paper p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input value={values.name} onChange={(event) => update("name", event.target.value)} className={inputClass(errors.name)} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input value={values.email} onChange={(event) => update("email", event.target.value)} className={inputClass(errors.email)} placeholder="you@example.com" type="email" autoComplete="email" />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input value={values.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass(errors.phone)} placeholder="+91 00000 00000" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Preferred configuration" error={errors.configuration}>
          <select value={values.configuration} onChange={(event) => update("configuration", event.target.value)} className={inputClass(errors.configuration)}>
            <option value="">Select configuration</option>
            <option value="2 BHK">2 BHK — Garden Residence</option>
            <option value="3 BHK">3 BHK — Courtyard Residence</option>
            <option value="4 BHK">4 BHK — Sky Residence</option>
          </select>
        </Field>
      </div>
      <div className="mt-6">
        <Field label="Your message" error={errors.message}>
          <textarea value={values.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass(errors.message)} min-h-32 resize-y`} placeholder="Tell us what matters most in your next home..." />
        </Field>
      </div>
      <div className="mt-6">
        <p className="demo-note"><strong>Demo form:</strong> client-side validation only. This form is not connected to a backend and will not send your information.</p>
      </div>
      <button type="submit" className="btn mt-7 w-full md:w-auto"><Send size={15} strokeWidth={1.5} /> Submit sample enquiry</button>
    </form>
  );
}

const inputClass = (error?: string) => `w-full border bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-olive/80 focus:border-olive ${error ? "border-red-700/70" : "border-line"}`;

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-olive">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
