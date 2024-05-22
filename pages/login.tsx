import { Login } from "@/components/Login";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
