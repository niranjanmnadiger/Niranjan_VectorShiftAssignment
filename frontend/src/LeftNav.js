// LeftNav.js
export const LeftNav = () => {
    return (
        <aside className="w-60 h-full border-r bg-white flex flex-col">
            {/* Workspace header */}
            <div className="px-4 py-3 border-b">
                <div className="text-sm font-semibold text-gray-900">
                    Niranjan M&apos;s Org
                </div>
                <div className="text-xs text-gray-500">Workspace</div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-2 py-3 text-sm">
                <div className="mb-2 text-[11px] font-semibold uppercase text-gray-400">
                    Logic
                </div>
                <NavItem label="Pipelines" active />
                <NavItem label="Agents" />

                <div className="mt-4 mb-2 text-[11px] font-semibold uppercase text-gray-400">
                    Data
                </div>
                <NavItem label="Knowledge Bases" />
                <NavItem label="Tables" />
                <NavItem label="Files" />

                <div className="mt-4 mb-2 text-[11px] font-semibold uppercase text-gray-400">
                    Interfaces
                </div>
                <NavItem label="Chatbots" />
                <NavItem label="Search" />
                <NavItem label="Forms" />
            </nav>

            {/* Upgrade footer */}
            <div className="border-t px-4 py-3">
                <button className="w-full rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">
                    Upgrade to unlock limits
                </button>
            </div>
        </aside>
    );
};

const NavItem = ({ label, active }) => (
    <button
        className={
            "w-full flex items-center gap-2 rounded-md px-3 py-2 text-left transition " +
            (active
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-600 hover:bg-gray-50")
        }
    >
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <span>{label}</span>
    </button>
);
