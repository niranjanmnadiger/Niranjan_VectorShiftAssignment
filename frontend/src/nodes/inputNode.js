// inputNode.js

import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const InputNode = (props) => {
  return <BaseNode {...NODE_CONFIGS.input} {...props} />;
};
