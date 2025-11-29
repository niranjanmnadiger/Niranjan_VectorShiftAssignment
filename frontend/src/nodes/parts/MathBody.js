//Performs: add, subtract, multiply, divide.

import { useState } from "react";
import { useStore } from "../../store";

export const MathBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [operation, setOperation] = useState(data?.operation || "add");

    const handleOpChange = (e) => {
        const val = e.target.value;
        setOperation(val);
        updateNodeField(id, "operation", val);
    };

    return (
        <div>
            <label style={{ fontSize: 12 }}>Operation:</label>
            <select
                value={operation}
                onChange={handleOpChange}
                style={{
                    width: "100%",
                    padding: "4px 6px",
                    border: "1px solid #D0D5DD",
                    borderRadius: 4,
                    marginTop: 2,
                }}
            >
                <option value="add">Add</option>
                <option value="sub">Subtract</option>
                <option value="mul">Multiply</option>
                <option value="div">Divide</option>
            </select>
        </div>
    );
};
