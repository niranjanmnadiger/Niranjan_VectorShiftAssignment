import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const MathNode = (props) => {
    return <BaseNode {...NODE_CONFIGS.math} {...props} />;
};