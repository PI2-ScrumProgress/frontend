import { NewTask } from "@/components/NewTask";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="App">
      <NewTask />
    </div>
  );
}
