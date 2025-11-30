import React from "react";

export const StatusModal = ({ open, onClose, result }) => {
    if (!open || !result) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white shadow-xl rounded-xl p-6 w-[380px] animate-scaleIn">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Pipeline Summary
                </h2>

                <div className="text-gray-700 text-sm space-y-2">
                    <p>
                        <strong>Nodes:</strong> {result.num_nodes}
                    </p>
                    <p>
                        <strong>Edges:</strong> {result.num_edges}
                    </p>
                    <p>
                        <strong>Is DAG:</strong>{" "}
                        {result.is_dag ? "Yes" : " No (Cycle Detected)"}
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 bg-vsPrimary text-white rounded-lg hover:opacity-90 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
