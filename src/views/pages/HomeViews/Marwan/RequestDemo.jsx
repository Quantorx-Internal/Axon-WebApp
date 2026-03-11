import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {useState} from "react";

const inputBase =
  "w-full bg-[#0B1E36] text-white placeholder:text-white border border-[#FFFFFF3D] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-base";

const selectBase =
  "w-full bg-[#0B1E36] text-white border border-[#FFFFFF3D] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 text-base appearance-none cursor-pointer";

export default function RequestDemo() {
   const [errors, setErrors] = useState({});
   const [phone,setPhone] =useState("");
   const[displayPhone,setDisplayPhone] = useState("");
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            companyName: "",
            jobTitle: "",
            employees: "",
            storage: "",
            geospatial: "No",
        });
        const validate = () => {
            const newErrors = {};

            if (!/^[a-zA-Z]{2,}$/.test(formData.firstName))
            newErrors.firstName = "Enter a valid first name";

            if (!/^[a-zA-Z]{2,}$/.test(formData.lastName))
            newErrors.lastName = "Enter a valid last name";

            if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(formData.email))
            newErrors.email = "Enter a valid email";
            if (!formData.company.trim())
            newErrors.company = "Company name is required";
            if (!formData.jobTitle)
            newErrors.jobTitle="Please select a job title";

            if (!formData.companyName.trim())
            newErrors.companyName = "Company name is required";
            if (!formData.employees)
            newErrors.employees="Please select number of employees";
            if (phone.length < 12)
            newErrors.phone = "Enter a valid phone number";
            return newErrors;
        };
            const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = validate();
            if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
            }
        };
    return (
    <section className="w-full bg-[#031125] py-10 md:py-16 px-4 mt-20">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <h2 className="font-Roboto text-3xl md:text-5xl text-white font-[900] leading-tight tracking-[-0.21px]">
          Request a demo
        </h2>
        <p className="font-Roboto text-white text-base md:text-xl font-[500] leading-[30px] md:leading-[40px] max-w-2xl mt-3">
          Schedule A 20-Minute Meeting With Our Experts To Understand How You Can Use Spatial Analysis In Your Organization.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-6xl mx-auto mt-10">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <input
                    type="text"
                    placeholder="First name"
                    className={inputBase}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                <input
                    type="text"
                    placeholder="Last name"
                    className={inputBase}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
            </div>
            <div>
                <input
                type="email"
                placeholder="Work email"
                className={inputBase}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <input
                            type="text"
                            placeholder="Company name"
                            className={inputBase}
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                         />
                        {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
                <div className="col-span-2">
                    <PhoneInput
                       country="eg"
                        value={phone}
                        onChange={(value, countryData) => {
                          setPhone(value);
                          setDisplayPhone(`+${countryData.dialCode}${value.slice(countryData.dialCode.length)}`);
                            }}
                        countryCodeEditable={false}
                        enableLongNumbers={false} 
                        inputProps={{
                        maxLength: 18
                      }}
                      masks={{
                        eg: '... ... ....' // +20 XXX XXX XXX XXXX
                      }}
                      containerClass="!w-full"
                      inputClass="!w-full !bg-[#0B1E36] !text-white !placeholder-white !border !border-[#FFFFFF3D] focus:!outline-none focus:!ring-2 focus:!ring-blue-500 !rounded-lg !py-3 !pl-11 !pr-4 !text-base !h-auto"
                      buttonClass="!bg-[#0B1E36] !border !border-[#FFFFFF3D] !rounded-l-lg !border-r-0 hover:!bg-[#0B1E36]"
                      dropdownClass="!bg-[#0B1E36] !text-white !border !border-[#FFFFFF3D] [&_.country:hover]:!bg-[#1a3a5c] [&_.country.highlight]:!bg-[#1a3a5c]"
                      searchClass="!bg-[#0B1E36] !text-white !border !border-[#FFFFFF3D]"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="relative flex-1">
                  <select
                      className={selectBase}
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  >
                      <option value="" disabled>Job Title</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                  {errors.jobTitle && <p className="text-red-400 text-xs mt-1">{errors.jobTitle}</p>}
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Company Name"
                    className={inputBase}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
                {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>}
            </div>
            <div className="relative">
                <select 
                    className={selectBase} 
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                >
                    <option value="" disabled>Number of employees</option>
                </select>
                <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                {errors.employees && <p className="text-red-400 text-xs mt-1">{errors.employees}</p>}
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
  <div className="relative flex-1">
    <select
      className={`${selectBase} ${formData.geospatial === "No" ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={formData.geospatial === "No"}
      value={formData.storage}
      onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
    >
      <option value="" disabled>Where do you store your geospatial data?</option>
    </select>
        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
     </div>

        <div>
            <p className="text-white text-sm mb-2">Do you use geospatial technology already?</p>
            <div className="flex gap-6">
            <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                type="radio"
                value="Yes"
                checked={formData.geospatial === "Yes"}
                onChange={(e) => setFormData({ ...formData, geospatial: e.target.value })}
                /> Yes
            </label>
            <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                type="radio"
                value="No"
                checked={formData.geospatial === "No"}
                onChange={(e) => setFormData({ ...formData, geospatial: e.target.value })}
                /> No
            </label>
            </div>
        </div>
        </div>  

        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-2">
          <div className="flex flex-col gap-1">
            <label className="flex items-start gap-2 text-white text-sm cursor-pointer">
              <input type="checkbox" className="accent-white mt-1 w-4 h-4 flex-shrink-0" />
              I consent to receiving email marketing communications from CARTO
            </label>
            <p className="text-gray-400 text-sm ml-6">
              By submitting my personal information I accept the Privacy Notice
            </p>
          </div>
          <button type="submit" className="flex items-center justify-center gap-2 bg-[#036FE2] hover:bg-[#0258B8] text-white font-Roboto font-[600] text-lg rounded-full py-3 px-8 transition-colors flex-shrink-0">
            Request a demo <FaArrowRight />
          </button>
        </div>
      </form>
    </section>
  );
}