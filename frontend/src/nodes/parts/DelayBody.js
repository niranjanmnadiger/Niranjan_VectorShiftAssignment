import React, { useState } from "react";
import { useStore } from "../../store";
import { Label } from "../../ui/Label";
import { Input } from "../../ui/Input";

export const DelayBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const [delay, setDelay] = useState(data?.delay || 1000);

    const handleChange = (e) => {
        const val = e.target.value;
        setDelay(val);
        updateNodeField(id, "delay", val);
    };

    return (
        <div className="space-y-2">
            <Label>Delay (ms)</Label>

            <Input
                type="number"
                value={delay}
                onChange={handleChange}
                min={0}
                placeholder="1000"
            />
        </div>
    );
};
