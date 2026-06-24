import { IoIosArrowDown } from "react-icons/io";
import Button from "../../components/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useRef, useEffect } from "react";
import { Magnetic } from "../../components/Magnetic";
import { Reveal } from "../../components/Reveal";
import { CONTACT } from "@/lib/site";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const rows = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Work email: ${formData.email}`,
      `Phone: +${phone}`,
      `Company: ${formData.company}`,
      `Company name: ${formData.companyName}`,
      `Job title: ${formData.jobTitle}`,
      `Employees: ${formData.employees}`,
      `Already uses geospatial: ${formData.geospatial}`,
      formData.geospatial === "Yes" && formData.storage
        ? `Spatial data store: ${formData.storage}`
        : null,
    ].filter(Boolean);

    const subject = `AXON demo request — ${formData.company || formData.companyName}`;
    const body = `Hi AXON team,\n\nI'd like to request a demo.\n\n${rows.join(
      "\n"
    )}\n\nThanks,\n${formData.firstName}`;

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
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
              <span className="text-ink-muted">07</span>
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
                  Your demo request is ready in your email app — just hit send and
                  we&rsquo;ll be in touch within one business day.
                </p>
                <p className="text-ink-muted text-sm mt-4">
                  Didn&rsquo;t open?{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                    Email us at {CONTACT.email}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  Send another request
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

              <Magnetic>
                <Button
                  text="Request a demo"
                  variant="primary"
                  type="submit"
                  className="py-3.5 px-8 w-full sm:w-fit"
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
