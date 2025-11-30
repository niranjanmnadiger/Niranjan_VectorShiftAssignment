import React, { useState, useLayoutEffect, useRef } from "react";
import { useStore } from "../../store";
import { useUpdateNodeInternals } from "reactflow";
import { Handle, Position } from "reactflow";

export const TextBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const updateNodeInternals = useUpdateNodeInternals();

    const [text, setText] = useState(data?.text || "");
    const textareaRef = useRef(null);

    const extractVariables = (text) => {
        const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
        const vars = new Set();
        let match;
        while ((match = regex.exec(text)) !== null) {
            vars.add(match[1]);
        }
        return Array.from(vars);
    };

    useLayoutEffect(() => {
        const el = textareaRef.current;
        if (!el) return;

        // Auto-resize logic
        el.style.height = "auto";
        const newHeight = Math.max(48, Math.min(el.scrollHeight, 400));
        el.style.height = `${newHeight}px`;

        // Update React Flow
        requestAnimationFrame(() => {
            updateNodeInternals(id);
        });
    }, [text, id, updateNodeInternals]);

    const handleChange = (e) => {
        const v = e.target.value;
        setText(v);
        updateNodeField(id, "text", v);

        const vars = extractVariables(v);
        updateNodeField(id, "variables", vars);
    };

    const variables = extractVariables(text);

    return (
        <div className="space-y-2">
            {/* Dynamic Handles on the left */}
            {variables.map((varName, index) => {
                // Calculate position - starting from 30px from top, spacing 25px apart
                const topPosition = 30 + (index * 25);

                return (
                    <Handle
                        key={varName}
                        type="target"
                        position={Position.Left}
                        id={varName}
                        style={{
                            top: `${topPosition}px`,
                            background: "#3b82f6",
                            width: "10px",
                            height: "10px",
                            border: "2px solid white",
                            left: "-5px"
                        }}
                        title={varName}
                    />
                );
            })}

            {/* Label - inline styled */}
            <label
                className="text-sm font-medium text-gray-700"
                style={{
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "14px",
                    fontWeight: "500"
                }}
            >
                Text
            </label>

            {/* Textarea - native with inline styles */}
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                placeholder="Enter text... Use {{variable}}"
                className="resize-none overflow-hidden w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                    minHeight: "48px",
                    maxHeight: "400px",
                    fontFamily: "monospace",
                    fontSize: "13px",
                    lineHeight: "1.5"
                }}
            />

            {/* Info footer */}
            {(text.length > 0 || variables.length > 0) && (
                <div
                    className="text-xs text-gray-400"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "11px",
                        color: "#9ca3af",
                        marginTop: "4px"
                    }}
                >
                    <span>{text.length} chars</span>
                    {variables.length > 0 && (
                        <span style={{ color: "#3b82f6", fontWeight: "500" }}>
                            {variables.length} variable{variables.length !== 1 ? "s" : ""}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};