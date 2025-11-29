// mathNode.js

import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import { MathBody } from "./parts/MathBody";
import { NODE_CONFIGS } from "./nodeConfigs";

export const MathNode = (props) => {
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
                title={NODE_CONFIGS.math.title}
                selected={selected}
            >
                <MathBody id={id} data={data} />
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
