// outputNode.js

import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const OutputNode = (props) => {
  return <BaseNode {...NODE_CONFIGS.output} {...props} />;
};
