//If input1 > input2 ----> output "true", else "false"
//conditoinal 

import { useState } from "react";
import { useStore } from "../../store";

export const ConditionBody = ({ id, data }) => {
    const updateNodeField = useStore((s) => s.updateNodeField);
    const [operator, setOperator] = useState(data?.operator || ">");

    const handleChange = (e) => {
        const val = e.target.value;
        setOperator(val);
        updateNodeField(id, "operator", val);
    };

    return (
        <div>
            <label style={{ fontSize: 12 }}>Condition:</label>
            <select
                value={operator}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "4px 6px",
                    border: "1px solid #D0D5DD",
                    borderRadius: 4,
                    marginTop: 2,
                }}
            >
                <option value=">">A &gt; B</option>
                <option value="<">A &lt; B</option>
                <option value="==">A == B</option>
            </select>
        </div>
    );
};
