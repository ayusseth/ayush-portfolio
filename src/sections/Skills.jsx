import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  
  SiIntellijidea,
  SiGit,
  SiHibernate,
} from "react-icons/si";

import {
  ShieldCheck,
  Boxes,
  Database,
  Terminal,
  Workflow,
  ServerCog,
  Braces,
  Cpu,
  Coffee,
} from "lucide-react";

const skillCategories = [

  {
    title: "Programming",

    skills: [
   {
  name: "Java",

  icon: (
    <Coffee
      size={52}
      strokeWidth={1.8}
    />
  ),
},

      {
        name: "Gen AI",
        icon: <Cpu size={52} strokeWidth={1.5} />,
      },
    ],
  },

  {
    title: "Backend Engineering",

    skills: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot size={52} />,
      },

      {
        name: "Hibernate",
        icon: <SiHibernate size={52} />,
      },

      {
        name: "REST APIs",
        icon: <Braces size={52} strokeWidth={1.5} />,
      },

      {
        name: "Microservices",
        icon: <Boxes size={52} strokeWidth={1.5} />,
      },
    ],
  },

  {
    title: "Security & Authentication",

    skills: [
      {
        name: "JWT Security",
        icon: <ShieldCheck size={52} strokeWidth={1.5} />,
      },

      {
        name: "Authentication",
        icon: <ShieldCheck size={52} strokeWidth={1.5} />,
      },
    ],
  },

  {
    title: "Database & Persistence",

    skills: [
      {
        name: "MySQL",
        icon: <SiMysql size={52} />,
      },

      {
        name: "Database Design",
        icon: <Database size={52} strokeWidth={1.5} />,
      },
    ],
  },

  {
    title: "Tools & Workflow",

    skills: [
      {
        name: "Git",
        icon: <SiGit size={52} />,
      },

      {
        name: "Postman",
        icon: <SiPostman size={52} />,
      },

      {
  name: "Maven",
  icon: <Terminal size={52} strokeWidth={1.5} />,
},

      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea size={52} />,
      },
    ],
  },

  {
    title: "Architecture & Design",

    skills: [
      {
        name: "System Design",
        icon: <Workflow size={52} strokeWidth={1.5} />,
      },

      {
        name: "Scalability",
        icon: <ServerCog size={52} strokeWidth={1.5} />,
      },

      {
        name: "Layered Architecture",
        icon: <Cpu size={52} strokeWidth={1.5} />,
      },

      {
        name: "API Design",
        icon: <Terminal size={52} strokeWidth={1.5} />,
      },
    ],
  },

];

export default function Skills() {

  return (
    <section
      id="skills"
      className="py-28 px-6"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Engineering Stack
      </h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-8">
        Backend technologies, security systems,
        scalable architecture concepts, and modern
        engineering tools used in production-ready development.
      </p>

      {/* CATEGORY CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-20">

        {skillCategories.map((category, categoryIndex) => (

          <div key={categoryIndex}>

            {/* CATEGORY TITLE */}
            <h3 className="text-2xl font-semibold text-purple-400 mb-10">
              {category.title}
            </h3>

            {/* GLASS BOX */}
            <div
              className="
                glass
                rounded-3xl
                border
                border-white/10
                p-10
              "
            >

              {/* SKILLS */}
              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-16
                "
              >

                {category.skills.map((skill, index) => (

                  <div
                    key={index}

                    className="
                      flex
                      flex-col
                      items-center
                      group
                      cursor-pointer
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        text-purple-400
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-violet-300
                        group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]
                      "
                    >
                      {skill.icon}
                    </div>

                    {/* TEXT */}
                    <p
                      className="
                        mt-4
                        text-gray-300
                        text-lg
                        transition-all
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}