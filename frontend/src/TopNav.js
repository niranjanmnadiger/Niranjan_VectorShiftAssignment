import { Search, Undo2, Redo2, History, Play, Upload } from "lucide-react";

export const TopNav = () => {
    return (
        <div className="w-full border-b bg-white shadow-sm">
            {/* Top Row */}
            <div className="flex items-center justify-between px-6 py-3">

                {/* Left: Breadcrumb + Title */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Pipelines</span>
                    <span>/</span>
                    <span className="text-gray-500">Current Pipeline</span>
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center space-x-3">

                    <button className="p-2 hover:bg-gray-100 rounded-md">
                        <Undo2 className="h-4 w-4 text-gray-600" />
                    </button>

                    <button className="p-2 hover:bg-gray-100 rounded-md">
                        <Redo2 className="h-4 w-4 text-gray-600" />
                    </button>

                    <button className="flex items-center space-x-1 px-3 py-2 border rounded-md bg-white hover:bg-gray-50">
                        <History className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Version History</span>
                    </button>

                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                        Deploy Changes
                    </button>

                    <button className="flex items-center space-x-1 px-3 py-2 border rounded-md bg-white hover:bg-gray-50">
                        <Play className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Run</span>
                    </button>

                    <button className="flex items-center space-x-1 px-3 py-2 border rounded-md bg-white hover:bg-gray-50">
                        <Upload className="h-4 w-4 text-gray-700" />
                        <span className="text-sm text-gray-700">Export</span>
                    </button>
                </div>
            </div>

            {/* Second Row: Search + Tabs */}
            <div className="flex items-center justify-between px-6 py-3">

                {/* Search Bar */}
                <div className="relative w-72">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                        className="w-full border rounded-md py-2 pl-10 pr-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder="Search Nodes"
                    />
                </div>

                {/* Tabs */}
                <div className="flex items-center space-x-6 text-sm font-medium">
                    <button className="text-indigo-600 border-b-2 border-indigo-600 pb-1">
                        Start
                    </button>
                    <button className="text-gray-600 hover:text-indigo-600">Objects</button>
                    <button className="text-gray-600 hover:text-indigo-600">Knowledge</button>
                    <button className="text-gray-600 hover:text-indigo-600">AI</button>
                    <button className="text-gray-600 hover:text-indigo-600">Integrations</button>
                    <button className="text-gray-600 hover:text-indigo-600">Logic</button>
                    <button className="text-gray-600 hover:text-indigo-600">Data</button>
                    <button className="text-gray-600 hover:text-indigo-600">Chat</button>
                </div>

                <div></div> {/* Spacer */}
            </div>
        </div>
    );
};
