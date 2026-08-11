import { useState } from "react";

const jobTypes = [
  "Post & rail fencing",
  "Stock fencing",
  "Deer fencing",
  "Domestic / garden fencing",
  "Bird proofing",
  "Land management",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Location: ${form.get("location")}`,
      `Job type: ${form.get("job")}`,
      "",
      `${form.get("details")}`,
    ].join("\n");
    window.location.href = `mailto:enquiries@gps-contracting.com?subject=${encodeURIComponent(
      "Fencing enquiry from website",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-sm border border-input bg-secondary/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="surface-panel rounded-sm p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className={field} />
        <input required name="phone" placeholder="Phone number" className={field} />
        <input
          required
          name="location"
          placeholder="Town / postcode"
          className={field}
        />
        <select name="job" className={field} defaultValue={jobTypes[0]}>
          {jobTypes.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="details"
        rows={4}
        placeholder="Tell us about the job — rough length, access, timescale…"
        className={`${field} mt-4 resize-none`}
      />
      <button
        type="submit"
        className="mt-5 w-full rounded-sm bg-grad-green px-6 py-3 font-display tracking-[0.14em] text-primary-foreground shadow-hard transition-transform hover:-translate-y-0.5"
      >
        Send enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        {sent
          ? "Your email app should now be open with the enquiry ready to send."
          : "No obligation, no pressure — we'll come out and price it properly."}
      </p>
    </form>
  );
}
