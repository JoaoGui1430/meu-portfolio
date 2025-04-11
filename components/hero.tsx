import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-block">
          <span className="text-sm font-medium bg-zinc-800 text-cyan-400 py-1 px-3 rounded-full">
            Desenvolvedor Back End
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Olá, me chamo <span className="text-cyan-400">João Guilherme</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Buscando ser melhor a cada dia
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          
          <Link href="/Currículo-JoãoGuilherme-estagio.pdf" target="_blank" rel="noopener noreferrer" download>
        <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
          Download CV
        </Button>
        </Link>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <Link href="https://github.com/JoaoGui1430" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/joaoguilhermegadelha/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects">
  <Button
    variant="ghost"
    size="icon"
    className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-zinc-800"
  >
    <ArrowDown className="h-6 w-6" />
    <span className="sr-only">Scroll Down</span>
  </Button>
</a>
        </div>
      </div>

      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
    </section>
  )
}
