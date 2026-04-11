"use client";

import { motion } from "framer-motion";
import { Children } from "react";

export default function EleAniamtion({
  children,
  i,
}: {
  children: React.ReactNode;
  i?: number;
}) {
  return (
    <>
      {Children.map(children, (child, ind) => {
        // if its a jsx just render it
        if (typeof child?.type !== "string") return child;
        const MotionTag = motion[child.type];

        // if its normal html tag make it motion tag
        return (
          <MotionTag
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i ? i * 0.12 : ind * 0.12,
              type: "tween",
            }}
            viewport={{ once:true }}
            {...child.props}
          />
        );
      })}
    </>
  );
}
