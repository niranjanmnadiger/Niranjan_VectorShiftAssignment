import { useState } from "react";
import { useStore } from "../../store";

export const OutputBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [currName, setCurrName] = useState(
        data?.outputName || id.replace("customOutput-", "output_")
    );
    const [outputType, setOutputType] = useState(data?.outputType || "Text");

    const handleNameChange = (e) => {
        const v = e.target.value;
        setCurrName(v);
        updateNodeField(id, "outputName", v);
    };

    const handleTypeChange = (e) => {
        const v = e.target.value;
        setOutputType(v);
        updateNodeField(id, "outputType", v);
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
                    value={outputType}
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
                    <option value="Image">Image</option>
                </select>
            </div>
        </div>
    );
};
