import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const LoggerNode = (props) => {
    return <BaseNode {...NODE_CONFIGS.logger} {...props} />;
};