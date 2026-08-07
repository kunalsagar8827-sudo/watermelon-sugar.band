"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  {
    id: "vocals",
    label: "Vocals / Lead Singer",
    question: "Do you have prior experience performing live in front of an audience?",
  },
  {
    id: "guitarist",
    label: "Guitarist",
    question: "Do you own a guitar?",
  },
  {
    id: "bassist",
    label: "Bassist",
    question: "Do you own a bass guitar?",
  },
  {
    id: "drummer",
    label: "Drummer",
    question: "Do you own a drum kit or a practice pad?",
  },
  {
    id: "keyboardist",
    label: "Keyboardist",
    question: "Do you own a keyboard or MIDI controller?",
  },
  {
    id: "manager",
    label: "Manager",
    question: "Do you have prior experience managing logistics, bookings, or a team?",
  },
  {
    id: "content-creator",
    label: "Content Creator",
    question: "Do you own a camera or a smartphone suitable for shooting content?",
  },
];

const GENDERS = ["Male", "Female", "Other"];

const SKILL_LEVELS = ["Beginner", "Intermediate", "Pro"];

const STEPS = ["Basics", "Role", "Skill", "Final Touch"];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  gender: "",
  role: "",
  roleAnswer: "",
  skillLevel: "",
  clipLink: "",
  whyJoin: "",
};

function fadeVariants(direction) {
  return {
    initial: { opacity: 0, x: direction > 0 ? 40 : -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction > 0 ? -40 : 40 },
  };
}

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const selectedRole = ROLES.find((r) => r.id === form.role);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function goNext() {
    if (
      step === 0 &&
      (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.gender)
    ) {
      setErrorMsg("Name, phone, address, and gender are required.");
      return;
    }
    if (step === 1 && !form.role) {
      setErrorMsg("Please select one role.");
      return;
    }
    if (step === 2 && (!form.roleAnswer || !form.skillLevel)) {
      setErrorMsg("Please answer the question and pick a skill level.");
      return;
    }
    setErrorMsg("");
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setErrorMsg("");
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Could not submit right now. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 sm:p-14 text-center max-w-xl mx-auto"
      >
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-rind/20 border border-rind/50 flex items-center justify-center text-3xl text-rind">
          &#10003;
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-cream mb-4">
          You're on the list.
        </h2>
        <p className="text-cream/70 leading-relaxed">
          Thanks for applying, {form.name.split(" ")[0] || "there"}. We'll reach out in
          October 2026 once auditions open. Until then, follow us on Instagram for
          updates on the build.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* progress */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className={`h-1 rounded-full transition-colors ${
                i <= step ? "bg-coral" : "bg-cream/15"
              }`}
            />
            <p
              className={`mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] ${
                i === step ? "text-cream" : "text-cream/35"
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-10 shadow-card">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 0 && (
            <motion.div
              key="step0"
              variants={fadeVariants(direction)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl text-cream mb-1">Tell us who you are</h2>
              <p className="text-sm text-cream/50 mb-6">
                Phone number is required so we can reach you in October.
              </p>

              <Field label="Full name" required>
                <input
                  className="input"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                />
              </Field>

              <Field label="Phone number" required>
                <input
                  className="input"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 ..."
                />
              </Field>

              <Field label="Email (optional)">
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Address" required>
                <input
                  className="input"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="City, State"
                />
              </Field>

              <Field label="Gender" required>
                <div className="flex gap-3">
                  {GENDERS.map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => update("gender", g)}
                      className={`flex-1 rounded-xl border py-3 uppercase tracking-[0.15em] text-xs sm:text-sm transition-colors ${
                        form.gender === g
                          ? "border-coral bg-coral/10 text-cream"
                          : "border-cream/15 text-cream/70 hover:border-cream/35"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </Field>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              variants={fadeVariants(direction)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-display text-2xl text-cream mb-1">Pick your role</h2>
              <p className="text-sm text-cream/50 mb-6">Choose the one that fits you best.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {ROLES.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => update("role", r.id)}
                    className={`text-left rounded-xl border px-4 py-3.5 transition-colors ${
                      form.role === r.id
                        ? "border-coral bg-coral/10 text-cream"
                        : "border-cream/15 text-cream/70 hover:border-cream/35"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && selectedRole && (
            <motion.div
              key="step2"
              variants={fadeVariants(direction)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl text-cream mb-1">
                  One quick question
                </h2>
                <p className="text-sm text-cream/60 mb-4">{selectedRole.question}</p>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => update("roleAnswer", opt)}
                      className={`flex-1 rounded-xl border py-3 uppercase tracking-[0.15em] text-sm transition-colors ${
                        form.roleAnswer === opt
                          ? "border-coral bg-coral/10 text-cream"
                          : "border-cream/15 text-cream/70 hover:border-cream/35"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-display text-lg text-cream mb-3">Skill level</p>
                <div className="flex gap-3">
                  {SKILL_LEVELS.map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => update("skillLevel", lvl)}
                      className={`flex-1 rounded-xl border py-3 uppercase tracking-[0.15em] text-xs sm:text-sm transition-colors ${
                        form.skillLevel === lvl
                          ? "border-coral bg-coral/10 text-cream"
                          : "border-cream/15 text-cream/70 hover:border-cream/35"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={fadeVariants(direction)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl text-cream mb-1">Final touch</h2>
              <p className="text-sm text-cream/50 mb-6">Both of these are optional.</p>

              <Field label="Link to a 30-second voice or instrument clip">
                <input
                  className="input"
                  value={form.clipLink}
                  onChange={(e) => update("clipLink", e.target.value)}
                  placeholder="Google Drive / Instagram / YouTube link"
                />
              </Field>

              <Field label="Why do you want to join Watermelon Sugar? (1 line)">
                <input
                  className="input"
                  maxLength={140}
                  value={form.whyJoin}
                  onChange={(e) => update("whyJoin", e.target.value)}
                  placeholder="In one line..."
                />
              </Field>
            </motion.div>
          )}
        </AnimatePresence>

        {errorMsg && <p className="mt-5 text-sm text-melon">{errorMsg}</p>}

        <div className="mt-9 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="text-sm uppercase tracking-[0.2em] text-cream/50 hover:text-cream transition-colors"
            >
              &larr; Back
            </button>
          ) : (
            <span />
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="rounded-full px-7 py-3 bg-cream text-night font-semibold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
            >
              Next &rarr;
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full px-7 py-3 bg-melon text-cream font-semibold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>

      <style jsx global>{`
        .input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(245, 239, 230, 0.15);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: #f5efe6;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .input::placeholder {
          color: rgba(245, 239, 230, 0.35);
        }
        .input:focus {
          border-color: #ff5c7a;
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.15em] text-cream/50 mb-2">
        {label} {required && <span className="text-melon">*</span>}
      </span>
      {children}
    </label>
  );
}
