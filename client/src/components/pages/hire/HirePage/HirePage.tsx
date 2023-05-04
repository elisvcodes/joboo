import React, { useRef, useState } from "react";
import InputField from "@/components/common/InputField/InputField";
import SelectField from "@/components/common/SelectField/SelectField";
import MCEEditor from "@/components/MCEEditor/MCEEditor";
import TextAreaField from "@/components/common/TextAreaField/TextAreaField";
import GridWrapper from "@/components/common/GridWrapper/GridWrapper";
import DynamicSpacer from "@/components/common/DynamicSpacer/DynamicSpacer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jobtype from "../../../../data/pages/hire/type.json";
import jobcategories from "../../../../data/pages/hire/categories.json";
import countries from "../../../../data/shared/countries.json";
import roles from "../../../../data/pages/hire/employeRole.json";
import useFormState from "@/hooks/useFormState";
import useMediaUpload from "@/hooks/useMediaUpload";
import { useCreateFirstJob } from "@/api/mutateData/useCreateFirstJob";
import { postData } from "@/api";

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

export default function HirePage() {
  const [formState, handleInputChange] = useFormState(initialState);
  const [loading, setLoading] = useState(false);
  const { mutate: createJob } = useCreateFirstJob();
  const stripe = useStripe();
  const elements = useElements();
  const cardElement = elements?.getElement("card");

  const { uploadMedia } = useMediaUpload();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!stripe || !cardElement) return null;
      setLoading(true);

      const { data } = await postData("/payment/create-payment-intent", {
        amount: 89,
        name: formState.fullName,
        email: formState.email,
      });
      const clientSecret = data.clientSecret;

      const paymentResult = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        console.log(paymentResult.error.message);
      } else {
        const logoUrl = formState.logo ? await uploadMedia(formState.logo) : "";
        createJob({
          ...formState,
          logo: logoUrl,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
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
            label="Job title*"
            placeholder="Software engineer"
            value={formState.jobTitle}
            onChange={handleInputChange("jobTitle")}
            required
          />
          <SelectField
            id="type"
            name="type"
            label="Type*"
            placeholder="Type of job"
            options={jobtype}
            value={formState.type}
            onChange={handleInputChange("type")}
          />
          <SelectField
            id="category"
            name="category"
            label="Category*"
            placeholder="Job Catgeory"
            options={jobcategories}
            value={formState.category}
            onChange={handleInputChange("category")}
          />
          <SelectField
            id="location"
            name="location"
            label="Location*"
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
          label="Company Title*"
          placeholder="NASA"
          value={formState.companyTitle}
          onChange={handleInputChange("companyTitle")}
          required
        />
        <DynamicSpacer height={"sm"} />
        <TextAreaField
          id="companyDescription"
          name="companyDescription"
          label="Company Description*"
          placeholder="We ship large spaceships to space 😱"
          value={formState.companyDescription}
          onChange={handleInputChange("companyDescription")}
        />
        <DynamicSpacer height={"sm"} />
        <InputField
          id="logo"
          name="logo"
          label="Company Logo*"
          type="file"
          onChange={handleInputChange("logo")}
          required
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
            label="Full Name*"
            placeholder="John doe"
            value={formState.fullName}
            onChange={handleInputChange("fullName")}
            required
          />
          <SelectField
            id="role"
            name="role"
            label="Role*"
            placeholder="Role"
            options={roles}
            value={formState.role}
            onChange={handleInputChange("role")}
          />
          <InputField
            id="email"
            name="email"
            label="Email*"
            type="email"
            placeholder="john@nasa.gov"
            value={formState.email}
            onChange={handleInputChange("email")}
            required
          />
          <InputField
            id="password"
            name="password"
            label="Password*"
            type="password"
            placeholder="••••••"
            value={formState.password}
            onChange={handleInputChange("password")}
            required
          />
        </GridWrapper>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-lg mb-4">Payment</h3>

        <Card className="h-10 p-3 rounded-md">
          <CardElement />
        </Card>
      </div>
      <Button disabled={loading} type="submit">
        {loading ? (
          <span className="flex gap-3 items-center">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></span>
            <span>loading ...</span>
          </span>
        ) : (
          <span>Submit</span>
        )}
      </Button>
    </form>
  );
}
