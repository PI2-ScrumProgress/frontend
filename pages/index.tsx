import { NewTask } from "@/components/NewTask";
import { Login } from "@/components/Login";
import { NewUserStory } from "@/components/NewUserStory";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Login />
      <NewTask />
      <NewUserStory />
    </div>
  );
}
