// outputNode.js

import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import { OutputBody } from "./parts/OutputBody";
import { NODE_CONFIGS } from "./nodeConfigs";

export const OutputNode = (props) => {
  const { id, data, selected } = props;

  return (
    <div className="relative">
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
      />

      <BaseNode
        title={NODE_CONFIGS.output.title}
        selected={selected}
      >
        <OutputBody id={id} data={data} />
      </BaseNode>

      {/* Output Handle (optional – keep it for future use maybe- where u will take this OP as IP for some other thingy)*/}

    </div>
  );
};
