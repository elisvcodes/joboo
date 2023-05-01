import React, { useRef } from "react";
import InputField from "@/components/common/InputField/InputField";
import SelectField from "@/components/common/SelectField/SelectField";
import MCEEditor from "@/components/MCEEditor/MCEEditor";
import TextAreaField from "@/components/common/TextAreaField/TextAreaField";
import GridWrapper from "@/components/common/GridWrapper/GridWrapper";
import DynamicSpacer from "@/components/common/DynamicSpacer/DynamicSpacer";
import { PaymentElement, CardElement } from "@stripe/react-stripe-js";
import StripeWrapper from "@/components/pages/hire/StripeWrapper";
import jobtype from "../data/pages/hire/type.json";
import jobcategories from "../data/pages/hire/categories.json";
import countries from "../data/shared/countries.json";
import roles from "../data/pages/hire/employeRole.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function hire() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            label="Job title"
            placeholder="Software engineer"
          />
          <SelectField
            id="type"
            label={"Type"}
            placeholder="Type of job"
            options={jobtype}
          />
          <SelectField
            id="category"
            label={"Category"}
            placeholder="Job Catgeory"
            options={jobcategories}
          />
          <SelectField
            id="location"
            label={"Location"}
            placeholder="Job Location"
            options={countries}
          />
        </GridWrapper>

        <DynamicSpacer height={"sm"} />
        <MCEEditor />
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">About Company</h3>
        <InputField
          id="companyTitle"
          label="Company Title"
          placeholder="NASA"
        />
        <DynamicSpacer height={"sm"} />
        <TextAreaField
          id="companyDescription"
          label="Company Description"
          placeholder="We ship large spaceships to space 😱"
        />
        <DynamicSpacer height={"sm"} />
        <InputField id="companyLogo" label="Company Logo" type="file" />
        <DynamicSpacer height={"sm"} />
        <InputField
          id="companyWebsite"
          label="Company Website"
          placeholder="https://www.nasa.gov/"
        />
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Account Setup</h3>
        <GridWrapper>
          <InputField id="name" label="Full Name" placeholder="John doe" />
          <SelectField
            id="role"
            label={"Role"}
            placeholder="Role"
            options={roles}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="john@nasa.gov"
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••"
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
