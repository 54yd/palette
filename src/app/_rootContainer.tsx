"use client";

import "@/common//styles/globals.css";

import { ReactNode } from "react";
import Provider from "@/app/_provider";
import Transition from "@/common/containers/Transition";

const RootContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Provider>
      <Transition>{children}</Transition>
    </Provider>
  );
};

export default RootContainer;
