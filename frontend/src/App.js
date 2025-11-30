import { TopNav } from "./TopNav";
import { NodeToolbar } from "./NodeToolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopNav />
      <NodeToolbar />



      {/* Right Canvas + Submit */}
      <div className="flex-1 relative">
        <PipelineUI />

        {/* Submit Button pinned bottom-right */}
        <div className="absolute bottom-6 right-6 z-50">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
