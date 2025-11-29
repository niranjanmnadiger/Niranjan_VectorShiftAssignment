// MathBody.js

import { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";

export const MathBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [operation, setOperation] = useState(data?.operation || "add");

    const handleOpChange = (e) => {
        const val = e.target.value;
        setOperation(val);
        updateNodeField(id, "operation", val);
    };

    return (
        <div className="space-y-2">
            <Label>Operation</Label>

            <select
                value={operation}
                onChange={handleOpChange}
                className="w-full rounded-md border border-gray-300 bg-white px-2 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-vsPrimary focus:border-transparent"
            >
                <option value="add">Add</option>
                <option value="sub">Subtract</option>
                <option value="mul">Multiply</option>
                <option value="div">Divide</option>
            </select>
        </div>
    );
};
