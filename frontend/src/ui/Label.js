import clsx from "clsx";

export function Label({ className, ...props }) {
    return (
        <label
            className={clsx("text-xs font-medium text-gray-600", className)}
            {...props}
        />
    );
}