"use client";

import { applicationAction } from "@/actions/application";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import Toast from "@/components/ui/toast";
import { JOB_ROLES } from "@/data/available-roles";
import { useActionState } from "react";

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(
    applicationAction,
    { errors: {}, values: {} },
  );

  return (
    <div className="space-y-20 w-[90%] mx-auto">
      <SectionHeader>
        <h2>
          Jop <span>Application</span>
        </h2>
        <p className="mt-4 text-white/60">
          Apply for a role at OPSERA. Fill in your details and upload
          your CV.
        </p>
      </SectionHeader>

      <form
        action={formAction}
        className="space-y-6 [&_p]:text-red-400"
      >
        {/* FULL NAME */}
        <div>
          <input
            defaultValue={state?.values?.fullName}
            placeholder="Full name"
            type="text"
            name="fullName"
          />
          {state?.errors?.fullName && (
            <p>{state.errors.fullName[0]}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            defaultValue={state?.values?.email}
            placeholder="Email address"
            type="text"
            name="email"
          />
          {state?.errors?.email && <p>{state.errors.email[0]}</p>}
        </div>

        {/* PHONE */}
        <div>
          <input
            defaultValue={state?.values?.phone}
            placeholder="Phone number"
            className="appearance-none"
            type="text"
            name="phone"
          />
          {state?.errors?.phone && <p>{state.errors.phone[0]}</p>}
        </div>

        {/* GENDER  */}
        <div className="space-y-2">
          <h2>Gender</h2>

          <div className="flex gap-6 items-start [&>label]:flex [&>label]:gap-2">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                defaultChecked={state?.values?.gender === "female"}
              />
              female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked={state?.values?.gender === "male"}
              />
              male
            </label>
          </div>

          {state?.errors?.gender && <p>{state.errors.gender[0]}</p>}
        </div>

        {/* ROLE  */}
        <div>
          <select
            className="appearance-none"
            name="role"
            key={state?.values?.role}
            defaultValue={state?.values?.role}
          >
            <option value="">Select a role</option>

            {JOB_ROLES.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>

          {state?.errors?.role && <p>{state.errors.role[0]}</p>}
        </div>

        {/* CV */}
        <div>
          <input type="file" name="cv" accept="application/pdf" />

          {state?.errors?.cv && <p>{state.errors.cv[0]}</p>}
        </div>

        {/* show toast confirm the application was sent */}
        {state?.success && (
          <Toast
            status={"success"}
            message={"Your application was sent successefuly!"}
          />
        )}

        {/* SUBMIT */}
        <Button
          as="button"
          variant="shining"
          type="submit"
          className="w-full!"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}