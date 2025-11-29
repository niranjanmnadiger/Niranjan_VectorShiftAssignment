import React from "react";
import { Input } from "../../ui/Input";
import { Label } from "../../ui/Lable";
import { Textarea } from "../../ui/Textarea";

function LLMBody({ data, onChange }) {
    const update = (key, value) => {
        onChange({
            ...data,
            [key]: value
        });
    };

    return (
        <div className="space-y-4">

            {/* Model Selector */}
            <div className="space-y-1">
                <Label>Model</Label>
                <select
                    className="w-full border border-gray-300 rounded-md bg-white px-2 py-2 text-sm shadow-sm focus:ring-vsPrimary focus:border-vsPrimary"
                    value={data.model}
                    onChange={(e) => update("model", e.target.value)}
                >
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3.5">GPT-3.5</option>
                    <option value="llama">Llama</option>
                    <option value="mistral">Mistral</option>
                </select>
            </div>

            {/* Prompt */}
            <div className="space-y-1">
                <Label>Prompt</Label>
                <Textarea
                    placeholder="Enter your prompt…"
                    value={data.prompt || ""}
                    onChange={(e) => update("prompt", e.target.value)}
                />
            </div>

            {/* Temperature */}
            <div className="space-y-1">
                <Label>Temperature</Label>
                <Input
                    type="number"
                    step="0.1"
                    min="0"
                    max="2"
                    placeholder="1.0"
                    value={data.temperature || ""}
                    onChange={(e) => update("temperature", e.target.value)}
                />
            </div>

            {/* Max Tokens */}
            <div className="space-y-1">
                <Label>Max Tokens</Label>
                <Input
                    type="number"
                    min="1"
                    placeholder="256"
                    value={data.max_tokens || ""}
                    onChange={(e) => update("max_tokens", e.target.value)}
                />
            </div>
        </div>
    );
}

export default LLMBody;
