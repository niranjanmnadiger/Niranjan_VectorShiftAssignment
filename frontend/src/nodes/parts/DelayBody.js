import { useState } from "react";
import { useStore } from "../../store";

export const DelayBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);

    const [delay, setDelay] = useState(data?.delay || 1000);

    const handleChange = (e) => {
        const val = e.target.value;
        setDelay(val);
        updateNodeField(id, "delay", val);
    };

    return (
        <div>
            <label style={{ fontSize: 12 }}>Delay (ms):</label>
            <input
                type="number"
                value={delay}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "4px 6px",
                    border: "1px solid #D0D5DD",
                    borderRadius: 4,
                    marginTop: 2,
                }}
            />
        </div>
    );
};
