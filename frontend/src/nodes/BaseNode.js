// BaseNode.js 

import React from "react";
import { Card } from "../ui/Card";
import { cn } from "../utils/cn";

function BaseNode({ title, children, selected }) {
    return (
        <div
            className={cn(
                "relative w-auto",
                selected && "ring-2 ring-vsPrimary ring-offset-2 rounded-xl"
            )}
        >
            <Card
                className={cn(
                    "p-4 bg-white rounded-xl border border-gray-200",
                    "shadow-sm hover:shadow-md transition-all",
                    "flex flex-col gap-3",
                    "min-w-[240px] max-w-[500px]"
                )}
                style={{
                    // Force auto height to allow content to expand
                    height: "auto",
                    minHeight: "fit-content",
                    width: "auto"
                }}
            >
                {title && (
                    <div className="flex justify-between items-center shrink-0">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {title}
                        </span>
                    </div>
                )}

                <div className="w-full">
                    {children}
                </div>
            </Card>
        </div>
    );
}

export default BaseNode;