import ImageG from "@/components/ImageG";
import Exemplo from "./components/Exemplo";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImageG
          src="/logo.png"
          alt="PET SI logo"
          width={360}
          height={72}
          priority
        />
        <Exemplo />

        <p> Este repositório é um <b>template</b> para projetos do PET. Vá no <a className="text-red-800" href="https://github.com/petsi-each/pet-sites-boilerplate" target="_blank"> <b>GitHub</b> </a> e utilize-o como template quando criar um novo projeto, alterando as informações necessárias.</p>
        <p className="pb-6"> Siga as instruções do README do repositório no GitHub e da documentação de PET Sites sobre como iniciar um novo projeto</p>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/new?template_name=pet-sites-boilerplate&template_owner=petsi-each"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithubFilled size={20} className="text-white" />
            Use o template
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inicie um novo projeto
          </a>
        </div>
      </main>
      
    </div>
  );
}
