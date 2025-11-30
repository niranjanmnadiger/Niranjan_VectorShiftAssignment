import React from "react";
import { Card } from "../ui/Card";
import { cn } from "../utils/cn";

function BaseNode({ title, children, selected }) {
    return (
        <div
            className={cn(
                "relative w-full h-auto", // allow node to expand
                selected && "ring-2 ring-vsPrimary ring-offset-2 rounded-xl"
            )}
        >
            <Card
                className="
          p-4
          min-w-[240px]
          w-full
          h-auto                     /* critical: allow height expansion */
          bg-white
          rounded-xl
          border border-gray-200
          shadow-sm hover:shadow-md
          transition-all
          flex flex-col              /* stack children vertically */
          gap-3                      /* spacing without breaking layout */
        "
            >
                {title && (
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {title}
                        </span>
                    </div>
                )}

                <div className="w-full h-auto">
                    {children}
                </div>
            </Card>
        </div>
    );
}

export default BaseNode;
