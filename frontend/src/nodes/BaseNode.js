import { Handle, Position } from "reactflow";

export const BaseNode = ({
    id,
    data,
    title,
    color,
    inputs = [],
    outputs = [],
    Body,
}) => {
    return (
        <div
            style={{
                width: 220,
                minHeight: 100,
                borderRadius: 8,
                border: "1px solid #D0D5DD",
                background: "white",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
                overflow: "hidden",
                paddingBottom: 10,
            }}
        >
            {/* Header */}
            <div
                style={{
                    background: color || "#1C2536",
                    color: "white",
                    padding: "6px 10px",
                    fontWeight: 600,
                    borderBottom: "1px solid #E5E7EB",
                }}
            >
                {title}
            </div>

            {/* Body */}
            <div style={{ padding: 10 }}>
                {Body ? <Body id={id} data={data} /> : null}
            </div>

            {/* Input Handles */}
            {inputs.map((input, idx) => (
                <Handle
                    key={input.id}
                    id={input.id}
                    type="target"
                    position={Position.Left}
                    style={{ top: 40 + idx * 20 }}
                />
            ))}

            {/* Output Handles */}
            {outputs.map((output, idx) => (
                <Handle
                    key={output.id}
                    id={output.id}
                    type="source"
                    position={Position.Right}
                    style={{ top: 40 + idx * 20 }}
                />
            ))}
        </div>
    );
};
