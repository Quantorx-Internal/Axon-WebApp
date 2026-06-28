import { IoIosArrowDown } from "react-icons/io";
import Button from "../../components/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useRef, useEffect } from "react";
import { Magnetic } from "../../components/Magnetic";
import { Reveal } from "../../components/Reveal";
import { CONTACT } from "@/lib/site";
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const inputBase =
  "w-full bg-white text-ink placeholder:text-ink-muted border border-line focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent rounded-xl py-3 px-4 text-base transition-shadow";

const selectBase =
  "w-full bg-white text-ink border border-line focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent rounded-xl py-3 px-4 text-base appearance-none cursor-pointer transition-shadow";

const jobTitleOptions = ["CEO / Founder", "CTO", "VP of Engineering", "Engineering Manager", "Product Manager", "Data Scientist", "GIS Analyst", "Developer", "Other"];
const employeeOptions = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5000+"];
const storageOptions = ["PostgreSQL / PostGIS", "Oracle Spatial", "SQL Server", "ArcGIS Online / Enterprise", "Shapefiles", "Other"];

const expectations = [
  "A focused 20-minute walkthrough with a GIS + AI specialist",
  "A tailored look at workflows for your industry, in English or Arabic",
  "Answers on deployment, security, and pricing",
];

function AnimatedDropdown({ placeholder, options, value, onChange, disabled, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={`${selectBase} flex items-center justify-between text-left ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className={value ? "text-ink" : "text-ink-muted"}>{value || placeholder}</span>
        <IoIosArrowDown className={`text-ink-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute z-50 left-0 right-0 mt-2 bg-white border border-line rounded-xl overflow-hidden shadow-card transition-all duration-300 origin-top ${
          open ? "opacity-100 scale-y-100 max-h-60" : "opacity-0 scale-y-0 max-h-0"
        }`}
      >
        <ul className="overflow-y-auto max-h-60 py-1">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 hover:bg-cloud ${
                value === opt ? "bg-cloud text-ink font-medium" : "text-ink-soft"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function RequestDemo() {
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [, setDisplayPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companyName: "",
    jobTitle: "",
    employees: "",
    storage: "",
    geospatial: "No",
  });

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z]{2,}$/.test(formData.firstName)) newErrors.firstName = "Enter a valid first name";
    if (!/^[a-zA-Z]{2,}$/.test(formData.lastName)) newErrors.lastName = "Enter a valid last name";
    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Please select a job title";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.employees) newErrors.employees = "Please select number of employees";
    if (phone.length < 12) newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSendError("");
    setSending(true);

    const fullName = `${formData.firstName} ${formData.lastName}`;

    const htmlContent = `<div style="font-family: system-ui, -apple-system, Arial, sans-serif; background: #f0f2f5; padding: 20px 12px;">
  <div style="max-width: 560px; margin: auto;">

    <!-- Header -->
    <div style="background: #111; padding: 20px 24px; border-radius: 16px 16px 0 0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-size: 18px; font-weight: 800; color: #fff;">AX<span style="color:#3b9eff">O</span>N</td>
          <td align="right"><span style="background: #1e3a5f; color: #3b9eff; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 20px;">New demo request</span></td>
        </tr>
      </table>
    </div>

    <!-- Body -->
    <div style="background: #fff; padding: 28px 24px; border-left: 1px solid #e8eaed; border-right: 1px solid #e8eaed;">

      <p style="font-size: 10px; font-weight: 700; color: #3b9eff; letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 6px;">06 —— Get in touch</p>
      <h1 style="font-size: 22px; font-weight: 800; color: #111; margin: 0 0 8px;">New demo request<span style="color:#3b9eff">.</span></h1>
      <p style="font-size: 13px; color: #888; line-height: 1.65; margin: 0 0 24px;">Someone submitted a demo request. Here's what they shared.</p>

      <div style="height: 1px; background: #f0f0f0; margin-bottom: 4px;"></div>

      <!-- Rows -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999; width: 45%;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${fullName}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Work email</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #3b9eff; font-weight: 600; text-align: right;">${formData.email}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">+${phone}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${formData.company}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Company name</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${formData.companyName}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Job title</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${formData.jobTitle}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Employees</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${formData.employees}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 12px; color: #999;">Geo storage</td><td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; font-size: 13px; color: #111; font-weight: 600; text-align: right;">${formData.storage || "N/A"}</td></tr>
        <tr><td style="padding: 12px 0; font-size: 12px; color: #999;">Uses geo tech?</td><td style="padding: 12px 0; text-align: right;"><span style="background: #eef5ff; color: #3b9eff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px;">${formData.geospatial}</span></td></tr>
      </table>

      <!-- Bullets -->
      <div style="background: #f8f9fb; border-radius: 12px; padding: 16px 18px; margin-top: 24px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td valign="top" width="28" style="padding-bottom: 12px;"><span style="background: #eef5ff; color: #3b9eff; font-size: 10px; font-weight: 700; padding: 3px 6px; border-radius: 50%;">01</span></td>
            <td style="padding-bottom: 12px; font-size: 13px; color: #555; line-height: 1.5; border-bottom: 1px solid #eee;">Focused 20-min walkthrough with a GIS + AI specialist</td>
          </tr>
          <tr><td colspan="2" style="height: 12px;"></td></tr>
          <tr>
            <td valign="top" width="28" style="padding-bottom: 12px;"><span style="background: #eef5ff; color: #3b9eff; font-size: 10px; font-weight: 700; padding: 3px 6px; border-radius: 50%;">02</span></td>
            <td style="padding-bottom: 12px; font-size: 13px; color: #555; line-height: 1.5; border-bottom: 1px solid #eee;">Tailored look at their industry workflows, in English or Arabic</td>
          </tr>
          <tr><td colspan="2" style="height: 12px;"></td></tr>
          <tr>
            <td valign="top" width="28"><span style="background: #eef5ff; color: #3b9eff; font-size: 10px; font-weight: 700; padding: 3px 6px; border-radius: 50%;">03</span></td>
            <td style="font-size: 13px; color: #555; line-height: 1.5;">Answers on deployment, security, and pricing</td>
          </tr>
        </table>
      </div>

    </div>

    <!-- Footer -->
    <div style="background: #111; border-radius: 0 0 16px 16px; padding: 16px 24px; text-align: center;">
      <p style="color: #555; font-size: 11px; margin: 0;">Sent automatically from your AXON demo request form.</p>
    </div>

  </div>
</div>`;

    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "AXON Demo Form", email: "maro.salah110@gmail.com" },
          to: [{ email: "maldemery@quantorx.com", name: "AXON Team" }],
          replyTo: { email: formData.email, name: fullName },
          subject: `Demo Request — ${fullName} · ${formData.company}`,
          htmlContent,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `HTTP ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Brevo error:", err);
      setSendError(`Failed to send: ${err.message}. Please email us directly.`);
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setPhone("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      companyName: "",
      jobTitle: "",
      employees: "",
      storage: "",
      geospatial: "No",
    });
  };

  return (
    <section className="w-full bg-mist section-pad px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14 items-start">
          {/* Left — editorial statement */}
          <Reveal className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="text-ink-muted">06</span>
              <span className="h-px w-7 bg-ink/20" />
              <span className="text-accent">Get in touch</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-medium text-ink tracking-[-0.04em] leading-[0.95]">
              Let&rsquo;s talk<span className="text-accent">.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed max-w-sm">
              Schedule a 20-minute walkthrough with our experts and see how AXON
              fits your organization.
            </p>
            <div className="flex flex-col mt-2">
              {expectations.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 py-4 border-t border-dashed border-ink/15 first:border-t-0"
                >
                  <span className="font-mono text-xs text-ink-muted mt-1 shrink-0">
                    {`0${i + 1}`}
                  </span>
                  <span className="text-ink-soft leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={0.1} className="bg-white rounded-[1.75rem] border border-line shadow-card p-6 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-12 md:py-20">
                <span className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-[-0.02em]">
                  Thanks{formData.firstName ? `, ${formData.firstName}` : ""}!
                </h3>
                <p className="text-ink-soft leading-relaxed mt-3 max-w-sm">
                  We&rsquo;ve received your request and will be in touch within
                  one business day.
                </p>
                <p className="text-ink-muted text-sm mt-4">
                  Questions in the meantime?{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                    Email us at {CONTACT.email}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  Submit another request
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First name" className={inputBase} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input type="text" placeholder="Last name" className={inputBase} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <input type="email" placeholder="Work email" className={inputBase} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Company" className={inputBase} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                <div className="phone-light">
                  <PhoneInput
                    country="eg"
                    value={phone}
                    onChange={(value, countryData) => {
                      setPhone(value);
                      setDisplayPhone(`+${countryData.dialCode}${value.slice(countryData.dialCode.length)}`);
                    }}
                    countryCodeEditable={false}
                    enableLongNumbers={false}
                    inputProps={{ maxLength: 18 }}
                    masks={{ eg: "... ... ...." }}
                    containerClass="!w-full"
                    inputClass="!w-full !bg-white !text-ink !border !border-line focus:!ring-2 focus:!ring-accent/40 !rounded-xl !py-3 !pl-12 !pr-4 !text-base !h-auto"
                    buttonClass="!bg-white !border !border-line !rounded-l-xl !border-r-0 hover:!bg-cloud"
                    dropdownClass="!bg-white !text-ink !border !border-line [&_.country:hover]:!bg-cloud [&_.country.highlight]:!bg-cloud"
                    searchClass="!bg-white !text-ink !border !border-line"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedDropdown placeholder="Job title" options={jobTitleOptions} value={formData.jobTitle} onChange={(val) => setFormData({ ...formData, jobTitle: val })} error={errors.jobTitle} />
                <div>
                  <input type="text" placeholder="Company name" className={inputBase} value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedDropdown placeholder="Number of employees" options={employeeOptions} value={formData.employees} onChange={(val) => setFormData({ ...formData, employees: val })} error={errors.employees} />
                <AnimatedDropdown placeholder="Where do you store geospatial data?" options={storageOptions} value={formData.storage} onChange={(val) => setFormData({ ...formData, storage: val })} disabled={formData.geospatial === "No"} />
              </div>

              <div>
                <p className="text-ink-soft text-sm mb-2">Do you use geospatial technology already?</p>
                <div className="flex gap-6">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-ink cursor-pointer">
                      <input
                        type="radio"
                        value={opt}
                        checked={formData.geospatial === opt}
                        onChange={(e) => setFormData({ ...formData, geospatial: e.target.value })}
                        className="accent-accent w-4 h-4"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-2 text-ink-soft text-sm cursor-pointer">
                <input type="checkbox" className="accent-accent mt-1 w-4 h-4 flex-shrink-0" />
                I consent to receiving email marketing communications from AXON. By
                submitting my personal information I accept the Privacy Notice.
              </label>

              {sendError && (
                <p className="text-red-500 text-sm">{sendError}</p>
              )}

              <Magnetic>
                <Button
                  text={sending ? "Sending…" : "Request a demo"}
                  variant="primary"
                  type="submit"
                  className="py-3.5 px-8 w-full sm:w-fit disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={sending}
                />
              </Magnetic>
            </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
