import { TopNav } from "./TopNav";
import { NodeToolbar } from "./NodeToolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopNav />
      <NodeToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;