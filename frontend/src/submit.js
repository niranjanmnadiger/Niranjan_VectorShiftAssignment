import React from "react";
import { useStore } from "./store";

// Core function that talks to backend
export async function submitPipeline() {
    const nodes = useStore.getState().nodes;
    const edges = useStore.getState().edges;

    try {
        const res = await fetch("http://localhost:8000/pipelines/parse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nodes, edges }),
        });

        const data = await res.json();

        alert(`
Pipeline Summary:

Nodes   : ${data.num_nodes}
Edges   : ${data.num_edges}
Is DAG? : ${data.is_dag ? "Yes" : "No, contains cycles"}
    `);
    } catch (err) {
        console.error("Error submitting pipeline:", err);
        alert("Something went wrong while connecting to backend.");
    }
}

// Button component expected by App.js
export function SubmitButton() {
    const handleClick = () => {
        submitPipeline();
    };

    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-vsPrimary text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
            Submit Pipeline
        </button>
    );
}
