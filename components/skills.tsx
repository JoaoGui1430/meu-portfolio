import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  FileJson2,
  CodepenIcon as ReactIcon,
  Database,
  Server,
  GitBranch,
  Layers,
  Braces,
  Terminal,
} from "lucide-react"

export function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <Html5 className="h-10 w-10 text-cyan-400" />,
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <Css3 className="h-10 w-10 text-cyan-400" />,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <FileJson2 className="h-10 w-10 text-cyan-400" />,
      category: "frontend",
    },
    {
      name: "React",
      icon: <ReactIcon className="h-10 w-10 text-cyan-400" />,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="h-10 w-10 text-cyan-400" />,
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: <Server className="h-10 w-10 text-cyan-400" />,
      category: "backend",
    },
    {
      name: "Databases",
      icon: <Database className="h-10 w-10 text-cyan-400" />,
      category: "backend",
    },
    {
      name: "Python",
      icon: <Braces className="h-10 w-10 text-cyan-400" />,
      category: "backend",
    },
    {
      name: "Flask",
      icon: <Terminal className="h-10 w-10 text-cyan-400" />,
      category: "backend",
    },
    {
      name: "Git",
      icon: <GitBranch className="h-10 w-10 text-cyan-400" />,
      category: "tools",
    },
  ]

  return (
    <section id="skills" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          <span className="relative">
            Habilidades/Competências
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cyan-400 -mb-2"></span>
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              {skill.icon}
              <span className="mt-3 text-sm font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
