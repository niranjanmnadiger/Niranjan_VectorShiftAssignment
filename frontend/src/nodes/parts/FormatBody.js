import React, { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";
import { Textarea } from "../../ui/Textarea";

export const FormatBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [template, setTemplate] = useState(
        data?.template || "Hello {{name}}"
    );

    const handleChange = (e) => {
        const v = e.target.value;
        setTemplate(v);
        updateNodeField(id, "template", v);
    };

    return (
        <div className="space-y-2">
            <Label>Template</Label>

            <Textarea
                value={template}
                onChange={handleChange}
                placeholder="Hello {{name}}"
            />
        </div>
    );
};
