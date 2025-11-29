import { TopNav } from "./TopNav";
import { NodeToolbar } from "./NodeToolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">

      {/* TOP NAVIGATION */}
      <TopNav />

      {/* HORIZONTAL NODE TOOLBAR */}
      <NodeToolbar />

      {/* CANVAS */}
      <div className="flex-1 overflow-hidden">
        <PipelineUI />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="border-t p-3 bg-white">
        <SubmitButton />
      </div>

    </div>
  );
}

export default App;
