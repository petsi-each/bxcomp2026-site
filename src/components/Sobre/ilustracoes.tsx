export const ObjetivoIlustracao = () => (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <circle cx="160" cy="160" r="150" fill="#3060B2" opacity="0.18" />
        <circle cx="160" cy="160" r="105" fill="#FFFCE3" />
        <g stroke="#17240F" strokeWidth="4" fill="#17240F">
            <polygon points="160,110 186,128 176,158 144,158 134,128" />
            <polygon points="160,110 186,128 208,102 190,76 160,70" fill="none" />
            <polygon points="160,210 134,192 144,162 176,162 186,192" />
            <path d="M85,160 L108,142 L134,148 L144,162 L120,182 L92,178 Z" fill="none" />
            <path d="M235,160 L212,142 L186,148 L176,162 L200,182 L228,178 Z" fill="none" />
            <circle cx="160" cy="160" r="105" fill="none" strokeWidth="5" />
        </g>
        <rect x="30" y="40" width="16" height="16" fill="#FFAF30" transform="rotate(18 30 40)" />
        <rect x="270" y="230" width="16" height="16" fill="#498BA7" transform="rotate(-12 270 230)" />
        <circle cx="278" cy="55" r="9" fill="#FFC873" />
        <circle cx="40" cy="255" r="9" fill="#3060B2" />
        <rect x="55" y="255" width="14" height="14" fill="#FFAF30" transform="rotate(30 55 255)" />
    </svg>
);

export const OrganizacaoIlustracao = () => (
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M40 180 L64 60 L100 140 L160 30 L220 140 L256 60 L280 180 Z" fill="#FFAF30" stroke="#17240F" strokeWidth="4" strokeLinejoin="round" />
        <rect x="40" y="180" width="240" height="42" rx="12" fill="#3060B2" stroke="#17240F" strokeWidth="4" />
        <circle cx="64" cy="60" r="11" fill="#FFAF30" stroke="#17240F" strokeWidth="3" />
        <circle cx="160" cy="30" r="13" fill="#FFC873" stroke="#17240F" strokeWidth="3" />
        <circle cx="256" cy="60" r="11" fill="#FFAF30" stroke="#17240F" strokeWidth="3" />
        <circle cx="100" cy="140" r="8" fill="#498BA7" stroke="#17240F" strokeWidth="2.5" />
        <circle cx="220" cy="140" r="8" fill="#498BA7" stroke="#17240F" strokeWidth="2.5" />
    </svg>
);

export const OutrasCompeticoesIlustracao = () => (
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="40" y="30" width="150" height="190" rx="6" fill="#FFFCE3" stroke="#17240F" strokeWidth="4" transform="rotate(-6 40 30)" />
        <line x1="70" y1="70" x2="170" y2="60" stroke="#3060B2" strokeWidth="4" transform="rotate(-6 70 70)" />
        <line x1="70" y1="95" x2="170" y2="85" stroke="#498BA7" strokeWidth="4" transform="rotate(-6 70 95)" />
        <line x1="70" y1="120" x2="150" y2="112" stroke="#498BA7" strokeWidth="4" transform="rotate(-6 70 120)" />
        <circle cx="235" cy="150" r="60" fill="none" stroke="#FFAF30" strokeWidth="7" />
        <circle cx="235" cy="150" r="38" fill="#FFAF30" opacity="0.25" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 235 + 60 * Math.cos(rad);
            const y = 150 + 60 * Math.sin(rad);
            return <circle key={angle} cx={x} cy={y} r="9" fill="#FFAF30" stroke="#17240F" strokeWidth="2" />;
        })}
    </svg>
);
