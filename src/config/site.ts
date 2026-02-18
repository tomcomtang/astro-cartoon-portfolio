// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Portfolio",
  title: "Portfolio Luca",
  
  // Navigation
  navigation: {
    home: "Inicio",
    posts: "Posts",
    contact: "Contacto",
    comments: "Comentarios",
  },
  
  // Hero Section
  hero: {
    prefix: "Yo soy",
    name: "Luca",
    intro: "Soy desarrollador de software y aquí compartire mis proyectos realizados.\nWBienvenido a mi blog!",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "Ver posts",
      contactMe: "Contacto",
    },
  },
  
  // About Section
  about: {
    title: "Acerca de mi",
    text: [
     "Hola soy desarrollador de software con una formación técnica en el análisis de sistemas",
     "Realice un terciario donde aprendí buenas prácticas en POO, diagramas de flujo y arquitectura de sistemas", 
     "Trabaje con tecnologías como Java y .NET utilizando Visual Studio, además de teoría de redes (practicas en cisco)",
     "Excel VBA y Microsoft Proyect para gestión de proyectos",
     "Actualmente estoy enfocado en el desarrollo web aprendiendo JavaScript",
     "En este blog comparto mis proyectos prácticos y ejercicios, mientras sigo mi experiencia en el desarrollo frontend y backend",
     "Estoy abierto a oportunidades donde pueda aportar mis conocimientos y crecer como profesional"
     ]
  },
  
  // Contact Page
  contact: {
    title: "Ponte en contacto",
    subtitle: "Abierto a comenzar nuevos proyectos",
    info: {
      email: {
        label: "Email",
        value: "luca9802012@gmail.com",
        link: "mailto:luca9802012@gmail.com",
      },
      phone: {
        label: "Telefono",
        value: "3462308311",
        link: "tel:3462308311",
      },
      location: {
        label: "Localidad",
        value: "Venado Tuerto, Santa Fe",
      },
    },
    followMe: {
      title: "Sígueme",
      links: [
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/luca-santillan-28241a314/" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Luca689" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026. Todos los derechos reservados.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Site", url: "#" },
    ],
  },
  
  
  // Comments Page
  comments: {
    title: "Comentarios",
    subtitle: "Compartes tus ideas o preguntas aquí",
  },
};

