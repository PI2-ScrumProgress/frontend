import { NewTask } from "@/components/NewTask";
import { Login } from "@/components/Login";
import { NewUserStory } from "@/components/NewUserStory";
import App from "@/components/ListBacklogElements";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Login />
      <NewTask />
      <NewUserStory />
      <App />
    </div>
  );
}
