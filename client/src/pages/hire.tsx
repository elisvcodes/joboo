import React, { useRef } from "react";
import TextField from "@/components/common/TextField/TextField";
import SelectField from "@/components/common/SelectField/SelectField";
import MCEEditor from "@/components/MCEEditor/MCEEditor";
import jobtype from "../data/pages/hire/type.json";
import jobcategories from "../data/pages/hire/categories.json";
import countries from "../data/shared/countries.json";

export default function hire() {
  return (
    <div className="py-8">
      <div>
        <h1 className="font-bold text-xl italic mb-3">Post your job</h1>
        <p>
          Reach potential candiates anywhere in the world for only $89 for 30
          days
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Job Details</h3>
        <TextField
          id="jobTitle"
          label="Job title"
          placeholder="Software engineer"
        />
        <SelectField
          label={"Type"}
          placeholder="Type of job"
          options={jobtype}
        />
        <SelectField
          label={"Category"}
          placeholder="Job Catgeory"
          options={jobcategories}
        />
        <SelectField
          label={"Location"}
          placeholder="Job Location"
          options={countries}
        />

        <MCEEditor />
      </div>
    </div>
  );
}
