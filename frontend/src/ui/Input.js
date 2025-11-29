import clsx from "clsx";

export function Input({ className, ...props }) {
    return (
        <input
            className={clsx(
                "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-vsPrimary focus:border-transparent",
                className
            )}
            {...props}
        />
    );
}