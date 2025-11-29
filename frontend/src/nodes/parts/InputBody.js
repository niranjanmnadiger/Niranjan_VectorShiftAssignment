//InputBody.js

import { useState } from "react";
import { useStore } from "../../store";

export const InputBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [currName, setCurrName] = useState(
        data?.inputName || id.replace("customInput-", "input_")
    );
    const [inputType, setInputType] = useState(data?.inputType || "Text");

    const handleNameChange = (e) => {
        const v = e.target.value;
        setCurrName(v);
        updateNodeField(id, "inputName", v);
    };

    const handleTypeChange = (e) => {
        const v = e.target.value;
        setInputType(v);
        updateNodeField(id, "inputType", v);
    };

    return (
        <div>
            <div style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 12 }}>Name:</label>
                <input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                    style={{
                        width: "100%",
                        padding: "4px 6px",
                        border: "1px solid #D0D5DD",
                        borderRadius: 4,
                        marginTop: 2,
                    }}
                />
            </div>

            <div>
                <label style={{ fontSize: 12 }}>Type:</label>
                <select
                    value={inputType}
                    onChange={handleTypeChange}
                    style={{
                        width: "100%",
                        padding: "4px 6px",
                        border: "1px solid #D0D5DD",
                        borderRadius: 4,
                        marginTop: 2,
                    }}
                >
                    <option value="Text">Text</option>
                    <option value="File">File</option>
                </select>
            </div>
        </div>
    );
};
