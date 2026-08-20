"use client"

const Footer = () => {
    return (
        <div className="relative bottom-0 left-0 w-full mt-10">
            {/* Onda com padrão de calçada estilo Copacabana */}
            <svg
                viewBox="0 0 1440 320"
                className="absolute w-full md:h-80 h-[505px] -mb-1"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <pattern id="padraoCalcada" width="60" height="60" patternUnits="userSpaceOnUse">
                        <rect width="60" height="60" fill="var(--creme)" />
                        <path d="M0,15 C7.5,3 22.5,3 30,15 C37.5,27 52.5,27 60,15" stroke="var(--azulelegante)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.35" />
                        <path d="M-30,45 C-22.5,33 -7.5,33 0,45 C7.5,57 22.5,57 30,45 C37.5,33 52.5,33 60,45 C67.5,57 82.5,57 90,45" stroke="var(--azulelegante)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.35" />
                    </pattern>
                </defs>
                <path
                    fillOpacity="1"
                    fill="url(#padraoCalcada)"
                    d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>

            {/* Conteúdo do footer posicionado sobre a onda */}
            <div className="relative left-0 md:top-[188px] top-[280px] w-full flex justify-center items-end">
                <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center px-4 gap-4">
                    <div className="text-preto text-base font-roboto">
                        Desenvolvido por PET-SI 2026
                    </div>

                    <div className="flex items-center [@media(max-width:800px)]:justify-evenly [@media(max-width:800px)]:w-screen md:gap-6 my-[15px]">
                        <img className="w-24 h-auto" src="/images/bxcomp-footer.png" alt="BXCOMP" />
                        <img className="w-20 h-auto" src="/images/pet-logo.png" alt="PET-SI" />
                        <img className="w-[7.5rem] h-auto" src="/images/rocketseat.png" alt="Rocketseat" />
                    </div>

                    <div className="flex items-center [@media(max-width:800px)]:justify-evenly [@media(max-width:800px)]:w-screen md:gap-4">
                        <a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-laranja transition-colors hover:-translate-y-1 duration-200">
                            <img className="w-5 h-5" src="/images/facebookLogo.png" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/petsieach/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-laranja transition-colors hover:-translate-y-1 duration-200">
                            <img className="w-5 h-5" src="/images/instagramLogo.png" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-laranja transition-colors hover:-translate-y-1 duration-200">
                            <img className="w-5 h-5" src="/images/linkedinLogo.png" alt="LinkedIn" />
                        </a>
                        <a href="mailto:pet-si-each@usp.br" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-laranja transition-colors hover:-translate-y-1 duration-200">
                            <img className="w-5 h-5" src="/images/emailLogo.png" alt="E-mail" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
