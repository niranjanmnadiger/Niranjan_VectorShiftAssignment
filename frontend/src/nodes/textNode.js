// textNode.js

import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const TextNode = (props) => {
  return <BaseNode {...NODE_CONFIGS.text} {...props} />;
};

