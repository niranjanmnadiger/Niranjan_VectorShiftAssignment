import React, { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";

export const ConditionBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const [operator, setOperator] = useState(data?.operator || ">");

    const handleChange = (e) => {
        const val = e.target.value;
        setOperator(val);
        updateNodeField(id, "operator", val);
    };

    return (
        <div className="space-y-2">
            <Label>Condition</Label>

            <select
                value={operator}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-2 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-vsPrimary focus:border-transparent"
            >
                <option value=">">A &gt; B</option>
                <option value="<">A &lt; B</option>
                <option value="==">A == B</option>
            </select>
        </div>
    );
};
