import { useState } from "react";
import { useStore } from "../../store";

export const TextBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const [text, setText] = useState(data?.text || "{{input}}");

    const handleChange = (e) => {
        const v = e.target.value;
        setText(v);
        updateNodeField(id, "text", v);
    };

    return (
        <div>
            <label style={{ fontSize: 12 }}>Text:</label>
            <textarea
                value={text}
                onChange={handleChange}
                style={{
                    width: "100%",
                    minHeight: "40px",
                    resize: "none",
                    padding: "6px",
                    border: "1px solid #D0D5DD",
                    borderRadius: 4,
                    fontSize: 13,
                }}
            />
        </div>
    );
};
