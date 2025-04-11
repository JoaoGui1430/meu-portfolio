import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export const metadata = {
  title: "Portfólio | João Guilherme",
  description: "Meu portfólio como desenvolvedor Back-End",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
