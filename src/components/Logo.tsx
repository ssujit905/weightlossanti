export default function Logo({ className = "w-8 h-8", textClassName = "text-xl" }: { className?: string, textClassName?: string }) {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg shadow-sm text-white font-bold p-1.5 transition-transform group-hover:scale-105 ${className}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <line x1="19" x2="5" y1="5" y2="19" className="opacity-50" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                    <path d="M12 2v20M12 22l-4-4M12 22l4-4" stroke="currentColor" strokeWidth="2" className="text-white/90" />
                </svg>
            </div>
            <span className={`font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white ${textClassName}`}>
                WeightLoss<span className="text-blue-600 dark:text-blue-400">%</span>
            </span>
        </div>
    );
}
