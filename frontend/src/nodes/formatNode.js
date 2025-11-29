import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const FormatNode = (props) => {
    return <BaseNode {...NODE_CONFIGS.format} {...props} />;
};
