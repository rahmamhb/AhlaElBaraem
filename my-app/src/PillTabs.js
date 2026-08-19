// Shared tab switcher for dashboard screens. Replaces the six near-identical
// copy-pasted tab bars (rounded pill bar in Nourrice/StaffCommentDashboard/
// Parent/AdminLayout, plain text row in ChildrenManagement/SiteManagement),
// so every one of them scrolls instead of clipping on a narrow screen.
const PillTabs = ({ tabs, active, onChange, variant = "pill", className = "" }) => {
    if (variant === "plain") {
        return (
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`font-poppins text-lg transition ${
                            active === tab.key ? "font-semibold text-primary" : "text-gray-mid hover:text-primary/70"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className={`flex w-full justify-center overflow-x-auto px-4 ${className}`}>
            <div className="flex shrink-0 items-center rounded-full bg-white px-2 py-2 shadow-md sm:px-4 sm:py-3">
                {tabs.map((tab, i) => (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`shrink-0 whitespace-nowrap border-gray-mid px-4 py-2 font-poppins text-base transition sm:px-6 sm:text-lg md:px-8 ${
                            i < tabs.length - 1 ? "border-r-2" : ""
                        } ${active === tab.key ? "font-semibold text-primary" : "text-gray-mid hover:text-primary/70"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PillTabs;
