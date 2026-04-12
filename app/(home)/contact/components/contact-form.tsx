// @ts-nocheck
"use client";

import { contactAction } from "@/actions/contact-action";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import EleAniamtion from "@/components/ui/sliding-ele-animation";
import Toast from "@/components/ui/toast";
import { useActionState } from "react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    contactAction,
    { errors: {}, values: {} },
  );

  return (
    <div className="space-y-10 pe-4 max-lg:order-2">
      <SectionHeader>
        <h2>
          Get In <span>Touch Now</span>
        </h2>
      </SectionHeader>

      {/* contact form  */}
      <form
        className="space-y-6 [&_p]:text-red-400"
        action={formAction}
      >
        <EleAniamtion i={0}>
          {/* name*/}
          <div>
            <input
              defaultValue={state?.values?.name}
              placeholder="Full name"
              type="text"
              name="name"
            />
            {state?.errors?.name && <p>{state.errors.name[0]}</p>}
          </div>

          {/* email */}
          <div>
            <input
              defaultValue={state?.values?.email}
              placeholder="Email address"
              type="text"
              name="email"
            />
            {state?.errors?.email && <p>{state.errors.email[0]}</p>}
          </div>

          {/* phone */}
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

          {/* message */}
          <div>
            <textarea
              className="rounded-xl!"
              name="message"
              placeholder="Write your message to us"
              rows={10}
              defaultValue={state?.values?.message}
            />
            {state?.errors?.message && (
              <p>{state.errors.message[0]}</p>
            )}
          </div>
        </EleAniamtion>
        {/* show toast confirm the application was sent */}
        {state?.success && (
          <Toast
            key={state?.success}
            status={"success"}
            message={
              "Your message was sent, than you for contacting us"
            }
          />
        )}
        <Button
          slide
          as="button"
          variant="shining"
          type="submit"
          className="w-full!"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Send message"}
        </Button>
      </form>
    </div>
  );
}
