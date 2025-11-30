import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import { TextBody } from "./parts/TextBody";
import { NODE_CONFIGS } from "./nodeConfigs";

export const TextNode = (props) => {
  const { id, data, selected } = props;

  return (
    <div className="relative">

      {/* STATIC HANDLE (optional) */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: "10%" }}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />

      {/* AUTO-GENERATED HANDLES FOR {{variables}} */}
      {Array.isArray(data?.variables) &&
        data.variables.map((variableName, index) => (
          <Handle
            key={variableName}
            type="target"
            id={`var_${variableName}`}
            position={Position.Left}
            style={{
              top: `${40 + index * 26}px`,
            }}
            className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
          />
        ))}

      <BaseNode title={NODE_CONFIGS.text.title} selected={selected}>
        <TextBody id={id} data={data} />
      </BaseNode>

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />
    </div>
  );
};
