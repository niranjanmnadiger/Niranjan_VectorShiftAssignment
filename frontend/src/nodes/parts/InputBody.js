import React, { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";
import { Input } from "../../ui/Input";

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
        <div className="space-y-3">
            <div className="space-y-1">
                <Label>Name</Label>
                <Input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                    placeholder="input_name"
                />
            </div>

            <div className="space-y-1">
                <Label>Type</Label>
                <select
                    value={inputType}
                    onChange={handleTypeChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-vsPrimary focus:border-transparent"
                >
                    <option value="Text">Text</option>
                    <option value="File">File</option>
                </select>
            </div>
        </div>
    );
};
