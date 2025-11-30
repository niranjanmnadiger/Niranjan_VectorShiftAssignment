// llmNode.js

import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import LLMBody from "./parts/LLMBody";
import { NODE_CONFIGS } from "./nodeConfigs";
import { useStore } from "../store";

export const LLMNode = (props) => {
  const { id, data, selected } = props;

  const updateNode = useStore((s) => s.updateNode);

  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />

      <BaseNode title={NODE_CONFIGS.llm.title} selected={selected}>
        <LLMBody
          data={data}
          onChange={(newData) => updateNode(id, newData)}
        />
      </BaseNode>

      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />
    </div>
  );
};
