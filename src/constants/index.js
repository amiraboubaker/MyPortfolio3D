export const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Work', href: '#work' },
    { id: 4, name: 'Contact', href: '#contact' },
];

export const myProjects = [
    {
        title: ' HealthTracker - Mobile Application for Health Management',
        desc: 'HealthTracker is a revolutionary mobile application built with React Native and powered by Firebase, transforming the way you manage your health. With advanced features like sleep tracking, water intake monitoring, food management, and an AI-driven chatbot, it empowers users to take control of their wellness journey seamlessly.',
        subdesc:
            'Built with React native, Firebase, HealthTracker is designed for optimal performance and scalability.',
        texture: '/textures/project/HealthTracker.mp4',
        logo: '/assets/health.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React native',
                path: '/assets/react-native.svg',
            },
            {
                id: 2,
                name: 'Firebase',
                path: 'assets/firebase.svg',
            },
        ],
    },
    {
        title: 'CuteDog - Mobile Application for selling dogs',
        desc: 'Cute Dog is a React Native application designed for dog lovers, providing a variety of dog breeds to explore. Users can discover detailed information about each breed, including their characteristics, images, and fun facts.',
        subdesc:
            'With CuteDog, users can experience different species of dogs and find the perfect companion for their lifestyle.',
        texture: '/textures/project/CuteDog.mp4',
        logo: '/assets/DogApp.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React Native',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'GeniusMind - A Mobile application for Students',
        desc: 'GeniusMind is a cutting-edge mobile application designed to enhance the student learning experience. It simplifies task management, academic planning, and knowledge-sharing, offering a seamless platform for students to excel in their studies.',
        subdesc:
            'With a focus on efficiency, GeniusMind integrates intelligent scheduling, collaborative tools, and personalized learning features using Flutter, Firebase, and AI-powered analytics to optimize academic workflows.',
        texture: '/textures/project/GeniusMind.mp4',
        logo: '/assets/GeniusMind.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/flutter.svg',
            },
            {
                id: 2,
                name: 'Dart',
                path: 'assets/dart.svg',
            },
        ],
    },
    {
        title: 'Ktabinet - Web Application for selling books oneline',
        desc: 'Ktabinet is a comprehensive web application for buying and selling books online, offering users a centralized platform for book transactions. It allows users to browse a wide selection of books, manage their listings, and seamlessly purchase or sell books with others.',
        subdesc:
            'Built with Symfony , php and MySQL, Ktabinet ensures a seamless and secure book trading experience, tailored to meet the needs of modern readers and sellers.' ,
        texture: '/textures/project/ktabinet.mp4',
        logo: '/assets/Ktabinet.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Symfony',
                path: '/assets/symfony.svg',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/mysql.svg',
            },
            {
                id: 3,
                name: 'php',
                path: '/assets/php.svg',
            }
        ],
    },
    {
        title: 'My Jungle - A web Application for selling plants',
        desc: 'MyJungle is an innovative web application that enables users to buy and sell a wide variety of plants. With features like personalized plant recommendations, a secure payments system, and an easy-to-use marketplace, it caters to both plant enthusiasts and sellers.',
        subdesc:
'Built with React.js, MyJungle combines modern technology with a user-friendly interface. It offers an excellent platform for plant lovers, making it ideal as a hobby-driven marketplace or a thriving business venture.',
        texture: '/textures/project/MyJungle.mp4',
        logo: '/assets/Jungle.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2023 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];