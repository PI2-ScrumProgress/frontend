import { Login } from "@/components/Login";
import { NewUserStory } from "@/components/NewUserStory";
import { EmploymentPoints } from "@/components/EmploymentPoints";
import App from "@/components/ListBacklogElements";
import { NewTask } from "@/components/NewTask";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="App">
      <EmploymentPoints />
    </div>
  );
}
