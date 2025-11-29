// toolbar.js

export const PipelineToolbar = () => {
    return (
        <div className="w-full border-b bg-white px-4 py-3">
            <div className="flex items-center gap-3 text-sm">

                <button className="px-3 py-1.5 rounded-md bg-vsPrimary text-white hover:bg-vsPrimary/90 transition">
                    Run
                </button>

                <button className="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                    Reset
                </button>

                <button className="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                    Save
                </button>

                {/* Add more actions here if needed */}
            </div>
        </div>
    );
};
