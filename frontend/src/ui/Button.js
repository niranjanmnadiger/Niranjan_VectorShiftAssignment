import clsx from "clsx";

export function Button({ variant = "default", className, ...props }) {
    const base =
        "inline-flex items-center justify-center rounded-md text-sm font-medium px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        default: "bg-vsPrimary text-white hover:bg-indigo-600 focus:ring-vsPrimary",
        secondary:
            "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-gray-300",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
    };

    return (
        <button className={clsx(base, variants[variant], className)} {...props} />
    );
}
