import Image, { ImageProps } from 'next/image';

interface GImageProps extends ImageProps {
    src: string;
}

// Caso seu site esteja hospedado no github pages, o / será /repositório ao invés de simplesmente /. Sendo assim,
// Se estiver no github pages, use ImageG
// Caso contrário, use Image (do next/image)

const ImageG: React.FC<GImageProps> = ({ src, ...props }) => {
    const pathway = process.env.NODE_ENV === "production" ? '/pet-sites-boilerplate' : ''; 
    return (
        <Image
            src={pathway + src}
            {...props}
        />
    );
};

export default ImageG;