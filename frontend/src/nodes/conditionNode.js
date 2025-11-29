import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const ConditionNode = (props) => {
    return <BaseNode {...NODE_CONFIGS.condition} {...props} />;
};