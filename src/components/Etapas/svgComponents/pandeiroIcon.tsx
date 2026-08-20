import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const PandeiroIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--branco)";
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="19" fill="none" stroke={cor} strokeWidth="3" />
            <circle cx="24" cy="24" r="13" fill={cor} opacity="0.18" />
            {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 24 + 19 * Math.cos(rad);
                const y = 24 + 19 * Math.sin(rad);
                return <circle key={angle} cx={x} cy={y} r="3.2" fill={cor} />;
            })}
        </svg>
    );
};

export default PandeiroIcon;
