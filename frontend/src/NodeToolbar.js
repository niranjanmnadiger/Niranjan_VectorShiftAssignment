// NodeToolbar.js
import { DraggableNode } from "./draggableNode";

export const NodeToolbar = () => {
    return (
        <div className="w-full border-b bg-white px-4 py-3 flex items-center gap-3 overflow-x-auto">
            <DraggableNode type="customInput" label="Input" />
            <DraggableNode type="llm" label="LLM" />
            <DraggableNode type="customOutput" label="Output" />
            <DraggableNode type="text" label="Text" />
            <DraggableNode type="math" label="Math" />
            <DraggableNode type="condition" label="Condition" />
            <DraggableNode type="format" label="Format" />
            <DraggableNode type="logger" label="Logger" />
            <DraggableNode type="delay" label="Delay" />
        </div>
    );
};
