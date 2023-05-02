import React, { useRef, useState } from "react";
import InputField from "@/components/common/InputField/InputField";
import SelectField from "@/components/common/SelectField/SelectField";
import MCEEditor from "@/components/MCEEditor/MCEEditor";
import TextAreaField from "@/components/common/TextAreaField/TextAreaField";
import GridWrapper from "@/components/common/GridWrapper/GridWrapper";
import DynamicSpacer from "@/components/common/DynamicSpacer/DynamicSpacer";
import { CardElement } from "@stripe/react-stripe-js";
import StripeWrapper from "@/components/pages/hire/StripeWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jobtype from "../data/pages/hire/type.json";
import jobcategories from "../data/pages/hire/categories.json";
import countries from "../data/shared/countries.json";
import roles from "../data/pages/hire/employeRole.json";
import useFormState from "@/hooks/useFormState";
import useMediaUpload from "@/hooks/useMediaUpload";

const initialState = {
  jobTitle: "",
  email: "",
  fullName: "",
  password: "",
  role: "recruiter",
  companyTitle: "",
  companyDescription: "",
  logo: "",
  website: "",
  jobDescription: "",
  type: "fulltime",
  location: "remote",
  category: "other",
};

export default function hire() {
  const [formState, handleInputChange] = useFormState(initialState);

  const { uploadMedia } = useMediaUpload();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const logoUrl = formState.logo ? await uploadMedia(formState.logo) : "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-4xl m-auto py-8" onSubmit={onSubmit}>
      <div>
        <h1 className="font-bold text-xl italic mb-3">Post your job</h1>
        <p>
          Reach potential candiates anywhere in the world for only $89 for 30
          days
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Job Details</h3>
        <GridWrapper>
          <InputField
            id="jobTitle"
            name="jobTitle"
            label="Job title"
            placeholder="Software engineer"
            value={formState.jobTitle}
            onChange={handleInputChange("jobTitle")}
          />
          <SelectField
            id="type"
            name="type"
            label={"Type"}
            placeholder="Type of job"
            options={jobtype}
            value={formState.type}
            onChange={handleInputChange("type")}
          />
          <SelectField
            id="category"
            name="category"
            label={"Category"}
            placeholder="Job Catgeory"
            options={jobcategories}
            value={formState.category}
            onChange={handleInputChange("category")}
          />
          <SelectField
            id="location"
            name="location"
            label={"Location"}
            placeholder="Job Location"
            options={countries}
            value={formState.location}
            onChange={handleInputChange("location")}
          />
        </GridWrapper>

        <DynamicSpacer height={"sm"} />
        <MCEEditor
          value={formState.companyDescription}
          onChange={handleInputChange("companyDescription")}
        />
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">About Company</h3>
        <InputField
          id="companyTitle"
          name="companyTitle"
          label="Company Title"
          placeholder="NASA"
          value={formState.companyTitle}
          onChange={handleInputChange("companyTitle")}
        />
        <DynamicSpacer height={"sm"} />
        <TextAreaField
          id="companyDescription"
          name="companyDescription"
          label="Company Description"
          placeholder="We ship large spaceships to space 😱"
          value={formState.companyDescription}
          onChange={handleInputChange("companyDescription")}
        />
        <DynamicSpacer height={"sm"} />
        <InputField
          id="logo"
          name="logo"
          label="Company Logo"
          type="file"
          onChange={handleInputChange("logo")}
        />
        <DynamicSpacer height={"sm"} />
        <InputField
          id="website"
          name="website"
          label="Company Website"
          placeholder="https://www.nasa.gov/"
          value={formState.website}
          onChange={handleInputChange("website")}
        />
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Account Setup</h3>
        <GridWrapper>
          <InputField
            id="name"
            name="fullName"
            label="Full Name"
            placeholder="John doe"
            value={formState.fullName}
            onChange={handleInputChange("fullName")}
          />
          <SelectField
            id="role"
            name="role"
            label={"Role"}
            placeholder="Role"
            options={roles}
            value={formState.role}
            onChange={handleInputChange("role")}
          />
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="john@nasa.gov"
            value={formState.email}
            onChange={handleInputChange("email")}
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="••••••"
            value={formState.password}
            onChange={handleInputChange("password")}
          />
        </GridWrapper>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-lg mb-4">Payment</h3>
        <StripeWrapper>
          <Card className="h-10 p-3 rounded-md">
            <CardElement />
          </Card>
        </StripeWrapper>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
