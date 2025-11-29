// loggerNode.js

import React from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import { LoggerBody } from "./parts/LoggerBody";
import { NODE_CONFIGS } from "./nodeConfigs";

export const LoggerNode = (props) => {
    const { id, data, selected } = props;

    return (
        <div className="relative">
            {/* Input Handle only – logger is a sink node */}
            <Handle
                type="target"
                position={Position.Left}
                className="!w-3 !h-3 !bg-vsPrimary border-2 border-white rounded-full shadow"
            />

            <BaseNode
                title={NODE_CONFIGS.logger.title}
                selected={selected}
            >
                <LoggerBody id={id} data={data} />
            </BaseNode>
        </div>
    );
};
