import React from "react";
import { Card } from "../ui/Card";
import { cn } from "../utils/cn";

function BaseNode({ title, children, selected }) {
    return (
        <div
            className={cn(
                "relative",
                selected && "ring-2 ring-vsPrimary ring-offset-2 rounded-xl"
            )}
        >
            <Card className="p-4 min-w-[240px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                {title && (
                    <div className="mb-3 flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {title}
                        </span>
                    </div>
                )}

                <div className="space-y-3 text-sm text-gray-700">
                    {children}
                </div>
            </Card>
        </div>
    );
}

export default BaseNode;
