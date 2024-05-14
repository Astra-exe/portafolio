import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Juan Ramírez",
  logo: "/juan_logo_white.svg",
  email: "juan.ramirez.j99@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Sobre mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Astra-exe",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/astra_exe/",
    icon: "mdi:instagram",
  },
  {
    title: "Mail",
    url: "mailto:juan.ramirez.j99@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Juan Ramirez",
    description:
      "Soy un artista según Bukowski. Recién egresado de Ingeniería en Sistemas computacionales, especializándome en Analisis, Ciencia de datos y Machine Learning",
    image: identity.logo,
  },
  role: "Un artista, según Bukowski. Profesionalmente me desarrollo como Analista y Cientifico de datos Junior",
  description:
      "Me gusta llamarme a mi mismo creador digital. Soy una persona apasionada por el desarrollo, la ciencia de datos y entusiasta del diseño. A veces escribo y tomo fotos por hobby.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mis Proyectos",
      url: "/projects",
    },
    {
      title: "Sobre mi",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Sobre mi | Juan Ramírez",
    description:
      "Me gusta llamarme a mi mismo creador digital. Soy una persona apasionada por el desarrollo, la ciencia de datos y entusiasta del diseño. A veces escribo y tomo fotos por hobby.",
    image: identity.logo,
  },
  subtitle: "Algo de info extra por si quieres conocerme un poco más",
  about: {
    description: `
Me gusta llamarme a mi mismo creador digital. Soy una persona apasionada por el desarrollo, la ciencia de datos y entusiasta del diseño.
<br/><br/>
Tengo experiencia y conocimiento en Business Intelligence, herramientas de visualización de datos como Tableau, Google Looker Studio, Power BI y Excel. Además análisis, ciencia de datos y Machine Learning con Python, R, Pandas, Numpy y SciKitLearn.
<br/><br/>
Me encanta aprender cosas y ciencias nuevas, por esto es que puedo hacer diseño con Figma, Photoshop o Illustrator y Machine Learning al mismo tiempo, mis hemisferios cerebrales no están peleados.
<br/><br/>
En mi tiempo libre me encanta viajar en carretera, visitar y admirar la naturaleza, pasar tiempo con mi familia y mis mascotas, leer, escribir y tomar fotografías.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Hola`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `Ahora que me conoces un poquito más, tal vez quieras seguir conectadx conmigo, compartir ideas, proyectos, pensamientos o fotografías. ¡Sígueme! 😉`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Juan Ramirez",
    description: "Pensamientos, experiencias e ideas",
    image: identity.logo,
  },
  subtitle: "Pensamientos, experiencias e ideas",
};
