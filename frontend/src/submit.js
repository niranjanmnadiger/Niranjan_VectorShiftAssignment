import React, { useState } from "react";
import { useStore } from "./store";
import { StatusModal } from "./StatusModal";

// Helper that talks to backend
async function submitPipeline(nodes, edges) {
    const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
    });

    if (!res.ok) {
        throw new Error(`Backend error: ${res.status}`);
    }

    const data = await res.json();
    return data; // { num_nodes, num_edges, is_dag }
}

// Button + Modal component
export function SubmitButton() {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [result, setResult] = useState(null);

    const handleClick = async () => {
        if (nodes.length === 0) return; // button already disabled, extra guard

        try {
            setIsSubmitting(true);
            const data = await submitPipeline(nodes, edges);
            setResult(data);
            setModalOpen(true);
        } catch (err) {
            console.error("Error submitting pipeline:", err);
            window.alert("Something went wrong while connecting to backend.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const disabled = nodes.length === 0 || isSubmitting;

    return (
        <>
            <button
                onClick={handleClick}
                disabled={disabled}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition
          ${disabled
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-vsPrimary text-white hover:opacity-90"
                    }`}
                title={nodes.length === 0 ? "Add at least one node to submit" : ""}
            >
                {isSubmitting ? "Submitting..." : "Submit Pipeline"}
            </button>

            <StatusModal
                open={modalOpen}
                result={result}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}
