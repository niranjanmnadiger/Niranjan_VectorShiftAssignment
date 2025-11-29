import React, { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";
import { Textarea } from "../../ui/Textarea";

export const TextBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const [text, setText] = useState(data?.text || "{{input}}");

    const handleChange = (e) => {
        const v = e.target.value;
        setText(v);
        updateNodeField(id, "text", v);
    };

    return (
        <div className="space-y-2">
            <Label>Text</Label>

            <Textarea
                value={text}
                onChange={handleChange}
                placeholder="Enter text..."
            />
        </div>
    );
};
