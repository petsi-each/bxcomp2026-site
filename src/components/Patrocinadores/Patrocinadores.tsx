const Patrocinadores = () => {
    return (
        <div>
            <div className="titulo mt-[90px] text-center">
                <h1 className="[text-shadow:0_4px_20px_rgba(255,175,48,0.25)] gradiente-titulo font-cinzel_decorative font-black text-4xl md:text-5xl p-[10px]">Patrocinadores</h1>
            </div>
            <div className="flex mt-[50px] justify-center px-6">
                <div className="bg-creme rounded-card px-14 py-10 flex items-center justify-center shadow-soft">
                    <img className="w-[200px] md:w-[260px]" src="/images/rocketseat2.png" alt="Rocketseat" />
                </div>
            </div>
        </div>
    );
}

export default Patrocinadores;
