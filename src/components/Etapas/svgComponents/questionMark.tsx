const QuestionMark = () => {
    return (
        <div className="flex flex-col items-center justify-end w-full h-full gap-2">
            <svg 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="max-h-20 w-auto object-contain"
            >
                <circle cx="24" cy="24" r="22" fill="var(--verdescuro2)" stroke="var(--bege)" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
                <text x="24" y="32" textAnchor="middle" fontSize="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fill="var(--bege)">?</text>
            </svg>
        </div>
    );
};

export default QuestionMark;