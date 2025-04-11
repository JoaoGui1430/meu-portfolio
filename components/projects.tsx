import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Site De Revenda e Venda de Veiculos",
    description: "Este é um projeto de um site para revenda de veículos, desenvolvido com foco em apresentar veículos disponíveis para venda, com uma interface moderna e responsiva.",
    tags: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/JoaoGui1430/SiteRevendaVeiculos",
    liveUrl: "https://site-revenda-veiculos.vercel.app",
    image: "/siterevendaveiculos.png",
  },
  {
    id: 2,
    title: "API de Produtos para E-commerce",
    description: "Este é um projeto de backend para um sistema de e-commerce, responsável por gerenciar produtos.",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/JoaoGui1430/API_Products_Ecommerce",
    liveUrl: "https://api-products-ecommerce-one.vercel.app/products",
    image: "/api_ecommerce.png",
  },
  {
    id: 3,
    title: "Sistema de Agendamento Médico",
    description: "Este é um projeto completo de um sistema de agendamento de consultas médicas. O sistema permite que usuários se cadastrem, façam login, e agendem ou gerenciem suas consultas médicas de forma simples e intuitiva.",
    tags: ["React", "Express", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/JoaoGui1430/sistema-agendamento-medico",
    liveUrl: null, // sem deploy
    image: "/agendamento-medico.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400">{project.title}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 text-cyan-400 hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
