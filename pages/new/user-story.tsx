import { NewUserStory } from "@/components/NewUserStory";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="App">
      <NewUserStory />
    </div>
  );
}
