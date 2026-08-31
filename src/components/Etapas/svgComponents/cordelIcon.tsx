import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const LivroIcone: React.FC<IconProps> = () => {
    return (
        <img src="/iconesEtapas/livro.png" alt="Boto" className="w-full h-full" />
    );
};

export default LivroIcone;