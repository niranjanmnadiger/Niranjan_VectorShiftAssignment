import React, { useState, useLayoutEffect, useRef } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";
import { Textarea } from "../../ui/Textarea";
import { useReactFlow } from "reactflow";

export const TextBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const { updateNodeInternals } = useReactFlow();

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

        el.style.height = "0px";
        el.style.height = el.scrollHeight + "px";

        // 🔥 Critical ReactFlow update:
        updateNodeInternals(id);
    }, [text, id, updateNodeInternals]);

    const handleChange = (e) => {
        const v = e.target.value;

        setText(v);
        updateNodeField(id, "text", v);

        const vars = extractVariables(v);
        updateNodeField(id, "variables", vars);
    };

    return (
        <div className="space-y-2">
            <Label>Text</Label>

            <Textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                placeholder="Enter text... Use {{variable}}"
                className="resize-none overflow-hidden"
                style={{ height: "auto", minHeight: "48px" }}
            />
        </div>
    );
};
