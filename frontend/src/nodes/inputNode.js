import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import { InputBody } from "./parts/InputBody";
import { NODE_CONFIGS } from "./nodeConfigs";

export const InputNode = (props) => {
  const { id, data, selected } = props;

  return (
    <div className="relative">
      {/* Output-only node has no left handle IF you want — but since input is a pipeline start, 
          we KEEP a target handle only if your workflow requires it.
          For now, we give it BOTH handles for consistency. */}

      {/* Input Handle (optional for InputNode, but kept for pipeline flexibility) */}
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />

      <BaseNode
        title={NODE_CONFIGS.input.title}
        selected={selected}
      >
        <InputBody id={id} data={data} />
      </BaseNode>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />
    </div>
  );
};
