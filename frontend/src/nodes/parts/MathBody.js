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
        <div className="space-y-2 text-sm">
            <div className="flex justify-between text-[11px] text-gray-500">
                <span>Input A = top-left handle & Input B = bottom-left handle</span>

            </div>

            <div className="space-y-1">
                <Label>Operation</Label>
                <select
                    value={operation}
                    onChange={handleOpChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm shadow-sm focus:ring-vsPrimary focus:border-vsPrimary"
                >
                    <option value="add">ADD (A + B)</option>
                    <option value="sub">SUBTRACT (A − B)</option>
                    <option value="mul">MULTIPLY (A × B)</option>
                    <option value="div">DIVIDE (A ÷ B)</option>
                </select>
            </div>


        </div>
    );
};
