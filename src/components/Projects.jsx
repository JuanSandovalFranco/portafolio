import { projects } from "constant";
import PCards from "./PCards";

const Projects = () => {
  return (
    <section className="bg-slate-100 flex-col flex gap-10 py-10" id="proyectos">
      <h2 className="text-6xl text-third text-center">Proyectos Recientes</h2>

      <p className="w-[90%] mx-auto text-md text-gray-500 text-center">
        Proyectos compartidos durante los ultimos meses de el trabajo y cargos
        que he llevado acabo durante el proceso de diseño y programacion de
        estos elementos
      </p>

      <div className="flex flex-wrap justify-around gap-y-20">
        {projects.map((project) => (
          <PCards project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
