import clsx from "clsx";

export function Card({ className, ...props }) {
    return (
        <div
            className={clsx(
                "bg-white rounded-xl border border-gray-200 shadow-sm",
                className
            )}
            {...props}
        />
    );
}
