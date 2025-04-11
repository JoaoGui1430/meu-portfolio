import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Fale Comigo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-center hover:border-cyan-400/30 transition-colors">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <a
                href="mailto:joaoguigadelha1014@gmail.com"
                className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center"
              >
                joaoguigadelha1014@gmail.com
                <ExternalLink className="h-4 w-4 ml-1 inline" />
              </a>
            </div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-center hover:border-cyan-400/30 transition-colors">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Phone</h3>
              <a
                href="tel:+SEU_NUMERO_AQUI"
                className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center"
              >
                +55 (85) 99214-4530
                <ExternalLink className="h-4 w-4 ml-1 inline" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <a href="https://github.com/JoaoGui1430" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-cyan-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/joaoguilhermegadelha/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-cyan-400"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
