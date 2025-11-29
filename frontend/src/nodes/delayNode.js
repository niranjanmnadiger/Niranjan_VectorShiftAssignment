import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const DelayNode = (props) => {
    return <BaseNode {...NODE_CONFIGS.delay} {...props} />;
};