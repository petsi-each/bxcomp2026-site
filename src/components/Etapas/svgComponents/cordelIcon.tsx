import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const CordelIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <img src="/iconesEtapas/livro.png" alt="Livro" className="w-full h-full" />
    );
};

export default LivroIcone;