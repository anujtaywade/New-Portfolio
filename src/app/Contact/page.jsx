"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anujtaywade456@gmail.com",
    href: "mailto:anujtaywade456@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 7276587797", href: "tel:+917276587797" },
  { icon: MapPin, label: "Location", value: "Maharashtra, India", href: null },
];

const socialLinks = [
  { href: "https://github.com/anujtaywade", icon: Github, label: "Github" },
  {
    href: "https://www.linkedin.com/in/anuj-taywade-326881270/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Anujjj69", icon: Twitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/anuj_taywade07/",
    icon: Instagram,
    label: "Instagram",
  },
];

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() => {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }, 3000);
        })
        .catch((error) => console.log("error in sending email", error));
    }
  };

  const inputClass = (name) =>
    `w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 ${
      focused === name
        ? "border-teal-300/70 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <main className="min-h-screen px-6 py-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <section className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
            Available for freelancing
          </span>
          <h1 className="mt-6 text-5xl font-black leading-none text-balance md:text-6xl">
            Let&apos;s <span className="text-teal-300">Connect</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400 text-pretty">
            Have a project in mind? Let&apos;s discuss how we can work together to
            bring your ideas to life.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface rounded-[2rem] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                  Message
                </p>
                <h2 className="mt-2 text-3xl font-black">Send a Message</h2>
              </div>
              <span className="hidden h-12 w-12 place-items-center rounded-2xl bg-teal-300/15 text-teal-200 sm:grid">
                <Send className="size-5" />
              </span>
            </div>

            {submitted ? (
              <div className="grid min-h-96 place-items-center rounded-[1.5rem] border border-teal-300/25 bg-teal-300/10 p-8 text-center">
                <div>
                  <CheckCircle className="mx-auto mb-5 size-16 text-teal-300" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-zinc-400">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  placeholder="Your Name"
                  className={inputClass("name")}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  placeholder="Your Email"
                  className={inputClass("email")}
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused("")}
                  placeholder="Subject"
                  className={inputClass("subject")}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  placeholder="Your Message"
                  rows="6"
                  className={`${inputClass("message")} resize-none`}
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
                >
                  Send Message
                  <Send className="size-5" />
                </button>
              </div>
            )}
          </div>

          <div className="grid gap-6">
            <div className="surface rounded-[2rem] p-6 md:p-8">
              <h2 className="text-3xl font-black">Contact Information</h2>
              <div className="mt-6 grid gap-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-teal-300/45"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-white transition hover:text-teal-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-200"
                  >
                    <item.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-300/25 bg-emerald-300/10 p-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.75)]" />
                <span className="font-semibold text-emerald-200">
                  Available for Work
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Currently accepting all freelance projects and collaboration let
                me know through mail or social handles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
