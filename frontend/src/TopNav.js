export const TopNav = () => {
    return (
        <div className="w-full px-6 py-3 border-b bg-white flex items-center justify-between">

            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Pipelines</span>
                <span>/</span>
                <span className="text-gray-900 font-medium">My Workflow</span>
            </div>

            <div className="flex items-center gap-3">
                <button className="text-sm px-3 py-1.5 border rounded-md">View Traces</button>
                <button className="text-sm px-3 py-1.5 bg-vsPrimary text-white rounded-md">Deploy</button>
                <button className="text-sm px-3 py-1.5 bg-green-600 text-white rounded-md">Run</button>
            </div>
        </div>
    );
};
