import { InputBody } from "./parts/InputBody";
import { OutputBody } from "./parts/OutputBody";
import { LLMBody } from "./parts/LLMBody";
import { TextBody } from "./parts/TextBody";
import { MathBody } from "./parts/MathBody";
import { ConditionBody } from "./parts/ConditionBody";
import { FormatBody } from "./parts/FormatBody";
import { LoggerBody } from "./parts/LoggerBody";
import { DelayBody } from "./parts/DelayBody";


export const NODE_CONFIGS = {
    input: {
        title: "Input",
        color: "#2563eb",
        inputs: [],
        outputs: [{ id: "value", label: "Value" }],
        Body: InputBody,
    },

    llm: {
        title: "LLM",
        color: "#7c3aed",
        inputs: [
            { id: "system", label: "System" },
            { id: "prompt", label: "Prompt" },
        ],
        outputs: [{ id: "response", label: "Response" }],
        Body: LLMBody,
    },

    output: {
        title: "Output",
        color: "#16a34a",
        inputs: [{ id: "value", label: "Value" }],
        outputs: [],
        Body: OutputBody,
    },

    text: {
        title: "Text",
        color: "#ea580c",
        inputs: [],                      // will become dynamic in Task 3
        outputs: [{ id: "output", label: "Output" }],
        Body: TextBody,
    },

    math: {
        title: "Math",
        color: "#0ea5e9",
        inputs: [
            { id: "a", label: "A" },
            { id: "b", label: "B" }
        ],
        outputs: [
            { id: "result", label: "Result" }
        ],
        Body: MathBody,
    },
    condition: {
        title: "Condition",
        color: "#f59e0b",
        inputs: [
            { id: "a", label: "A" },
            { id: "b", label: "B" },
        ],
        outputs: [
            { id: "result", label: "Result" },
        ],
        Body: ConditionBody,
    },
    format: {
        title: "Format",
        color: "#db2777",
        inputs: [{ id: "input", label: "Input" }],
        outputs: [{ id: "formatted", label: "Formatted" }],
        Body: FormatBody,
    },
    logger: {
        title: "Logger",
        color: "#475569",
        inputs: [{ id: "value", label: "Value" }],
        outputs: [],
        Body: LoggerBody,
    },
    delay: {
        title: "Delay",
        color: "#10b981",
        inputs: [{ id: "input", label: "Input" }],
        outputs: [{ id: "output", label: "Output" }],
        Body: DelayBody,
    },
};
