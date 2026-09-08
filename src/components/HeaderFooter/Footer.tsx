"use client"

const Footer = () => {
    return (
        <footer className="relative w-full mt-10">
            {/* Onda decorativa em cor única — divisória entre o fundo verde e o rodapé bege */}
            <svg
                viewBox="0 0 1440 120"
                className="block w-full h-16 md:h-24"
                preserveAspectRatio="none"
            >
                <path
                    fill="var(--creme)"
                    d="M0,48L48,53.7C96,59,192,71,288,74C384,77,480,71,576,61.3C672,53,768,43,864,43C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                ></path>
            </svg>

            {/* Conteúdo do footer — fundo bege sólido, garante contraste com o texto escuro */}
            <div className="bg-creme w-full pb-10 pt-2 -mt-px">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
                    <div className="text-preto text-base font-roboto order-3 md:order-1">
                        Desenvolvido por PET-SI 2026
                    </div>

                    <div className="flex items-center justify-evenly w-full md:w-auto md:gap-6 order-1 md:order-2">
                        <img className="w-24 h-auto" src="/images/bxcomp-footer.png" alt="BXCOMP" />
                        <img className="w-20 h-auto" src="/images/pet-logo.png" alt="PET-SI" />
                        <img className="w-[7.5rem] h-auto" src="/images/rocketseat.png" alt="Rocketseat" />
                    </div>

                    <div className="flex items-center justify-evenly w-full md:w-auto md:gap-4 order-2 md:order-3">
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
        </footer>
    );
};

export default Footer;
