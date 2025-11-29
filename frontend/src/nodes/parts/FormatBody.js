import { useState } from "react";
import { useStore } from "../../store";

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
        <div>
            <label style={{ fontSize: 12 }}>Template:</label>
            <textarea
                value={template}
                onChange={handleChange}
                style={{
                    width: "100%",
                    minHeight: 40,
                    border: "1px solid #D0D5DD",
                    borderRadius: 4,
                    padding: 6,
                }}
            />
        </div>
    );
};
