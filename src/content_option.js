const logotext = "ALEX";
const meta = {
    title: "Alex Zimmer",
    description: "Desarrollador de videojuegos indies, especializado en diseño de personajes",
};

const introdata = {
    title: "Soy Alex Zimmer",
    animated: {
        first: "Desarrollador de videojuegos indies",
        second: "Especializado en diseño de personajes",
        third: "Creando mundos únicos",
    },
    description: "Desarrollador de videojuegos indies, especializado en diseño de personajes.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Sobre mí",
    aboutme: "Soy un desarrollador de videojuegos indies apasionado por crear experiencias icónicas, tanto en historia como en atmósfera. Mi especialidad es el diseño de personajes cartoon con appeal, enfocados en crear historias memorables y atrevidas. Estoy abierto a trabajos.",
};

const worktimeline = [{
        jobtitle: "Desarrollador de Videojuegos Indies",
        where: "Proyectos Independientes",
        date: "2023 - Presente",
    },
    {
        jobtitle: "Diseñador de Personajes",
        where: "Freelance",
        date: "2022 - Presente",
    },
    {
        jobtitle: "Artista Digital",
        where: "Proyectos Personales",
        date: "2021 - Presente",
    },
];

const skills = [{
        name: "Unity",
        value: 100,
    },
    {
        name: "Photoshop",
        value: 100,
    },
    {
        name: "Clip Studio",
        value: 100,
    },
    {
        name: "Maya",
        value: 70,
    },
    {
        name: "Diseño de Personajes",
        value: 95,
    },
];

const services = [{
        title: "Diseño de Personajes",
    },
    {
        title: "Concept Art",
    },
    {
        title: "Desarrollo de Videojuegos",
    },
];

const dataportfolio = {
    props: [
        {
            img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&crop=center",
            description: "Diseño de objetos que complementan la narrativa visual.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop&crop=center",
            description: "Elementos decorativos que enriquecen la composición.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center",
            description: "Objetos funcionales que definen el espacio.",
            link: "#",
        },
    ],
    escenarios: [
        {
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center",
            description: "Ambientes que transportan al espectador a mundos únicos.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1920&h=1080&fit=crop&crop=center",
            description: "Espacios que cuentan historias a través del diseño.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center",
            description: "Entornos que crean atmósferas memorables.",
            link: "#",
        },
    ],
    personajes: [
        {
            img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop&crop=center",
            description: "Personajes que cobran vida a través del arte digital.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&crop=center",
            description: "Expresiones que transmiten emociones profundas.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center",
            description: "Retratos que capturan la esencia humana.",
            link: "#",
        },
    ],
    composiciones: [
        {
            img: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1920&h=1080&fit=crop&crop=center",
            description: "Composiciones que equilibran forma y contenido.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center",
            description: "Arreglos visuales que crean armonía perfecta.",
            link: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop&crop=center",
            description: "Diseños que fusionan elementos en unidad visual.",
            link: "#",
        },
    ],
};

const contactConfig = {
    YOUR_EMAIL: "alexzimmer.zimmer1@gmail.com",
    YOUR_EMAIL_BUSINESS: "zimmzimmgames@gmail.com",
    description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y cómo podemos trabajar juntos para crear algo extraordinario.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};