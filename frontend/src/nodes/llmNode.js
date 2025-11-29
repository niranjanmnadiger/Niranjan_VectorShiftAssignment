// llmNode.js

import { BaseNode } from "./BaseNode";
import { NODE_CONFIGS } from "./nodeConfigs";

export const LLMNode = (props) => {
  return <BaseNode {...NODE_CONFIGS.llm} {...props} />;
};
