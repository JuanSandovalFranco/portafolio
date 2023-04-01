import NavBar from "components/NavBar";
import dynamic from "next/dynamic";

const HeroOn = dynamic(() =>
  import("components/HeroOn", { loading: () => <p>Loading...</p> })
);
const About = dynamic(() =>
  import("components/About", { loading: () => <p>Loading...</p> })
);
const Skills = dynamic(() =>
  import("components/Skills", { loading: () => <p>Loading...</p> })
);
const Projects = dynamic(() =>
  import("components/Projects", { loading: () => <p>Loading...</p> })
);
const Experience = dynamic(() =>
  import("components/Experience", { loading: () => <p>Loading...</p> })
);
const ContactForm = dynamic(() =>
  import("components/ContactForm", { loading: () => <p>Loading...</p> })
);

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="overflow-x-hidden max">
        <HeroOn />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactForm />
      </main>
    </>
  );
}
