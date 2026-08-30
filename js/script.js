/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const reveal = document.querySelectorAll(
    ".reveal, .project-browser-reveal, .services-reveal, .about-panel-reveal"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

});

reveal.forEach((element) => {
    observer.observe(element);
});


// Formulário

/* =========================================================
   CONTACT FORM
   ========================================================= */

/* =========================================================
   CONTACT FORM
   ========================================================= */

const projectForm = document.querySelector("#project-form");
const formSuccess = document.querySelector("#form-success");

if (projectForm && formSuccess) {

    projectForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (!projectForm.checkValidity()) {

            projectForm.reportValidity();

            return;
        }

        const formData = new FormData(projectForm);

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (result.success) {

                projectForm.reset();

                formSuccess.classList.add("is-visible");

            } else {

                console.error("Web3Forms:", result);

                alert(
                    result.message ||
                    "Unable to send the form."
                );

            }

        } catch (error) {

            console.error("Form error:", error);

            alert(
                "Unable to send the form. Please try again."
            );

        }

    });

}


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    /* =====================================================
       ENGLISH
       ===================================================== */

    en: {

        /* HERO */

        heroEyebrow:
            "THIAGO HITALO · WEB DEVELOPMENT",

        heroTitle:
            "I turn ideas<br>into useful websites.",

        heroDescription:
            "I design and build modern websites and landing pages with a focus on clarity, usability and real business goals.",

        heroPrimaryButton:
            "Start a project",

        heroSecondaryButton:
            "View my work",

        
        mockupManifesto:
    "Websites that look right. Experiences that work. Solutions that make sense.",

        // CONTACT FORM

        contactNote:
    "Tell me a little about what you're building and I'll get back to you.",

formNameLabel:
    "Name",

formNamePlaceholder:
    "Your name",

formEmailLabel:
    "Email",

formEmailPlaceholder:
    "you@example.com",

formCompanyLabel:
    "Company",

formCompanyPlaceholder:
    "Your company (optional)",

formProjectTypeLabel:
    "What do you need?",

formProjectTypePlaceholder:
    "Select a service",

formWebsiteOption:
    "Website",

formLandingOption:
    "Landing Page",

formMaintenanceOption:
    "Website Maintenance",

formOtherOption:
    "Something else",

formMessageLabel:
    "Tell me a little about the project",

formMessagePlaceholder:
    "What are you looking to build?",

formSubmitButton:
    "Send project enquiry",

formSuccess:
    "Thanks — I'll be in touch.",

        /* HERO BROWSER */

        mockupEyebrow:
            "DIGITAL EXPERIENCE",

        mockupTitle:
            "Built for the web",

        mockupDescription:
            "Modern digital solutions designed to elevate brands online.",

        mockupButton:
            "Explore",


        /* WORK */

        workEyebrow:
            "SELECTED WORK",

        workTitle:
            "A few things I've built for real-world needs.",

        workDescription:
            "Websites and digital experiences built to solve a purpose — from attracting attention to making a business easier to understand.",


        /* UNDONE */

        projectUndoneCategory:
            "WEBSITE · DEVELOPMENT",

        projectUndoneDescription:
            "A digital experience built to give a complex business a clearer and more professional presence online.",

        projectUndoneLink:
            "View real project",


        /* DENISE */

        projectDeniseCategory:
            "LANDING PAGE · DEVELOPMENT",

        projectDeniseDescription:
            "A modern landing page designed to present services and create a stronger online presence.",

        projectDeniseLink:
            "View project",


        /* TRAVEL */

        projectTravelCategory:
            "WEBSITE · DEVELOPMENT",

        projectTravelTitle:
            "TRAVEL AGENCY",

        projectTravelDescription:
            "A travel website designed to inspire destinations and simplify the journey from discovery to booking.",

        projectTravelLink:
            "View project",


        /* SERVICES */

        servicesEyebrow:
            "SERVICES",

        servicesTitle:
            "The right website for what you're building.",

        servicesDescription:
            "I focus on digital work that has a clear purpose: helping a business communicate, present itself and grow online.",


        serviceWebsitesTitle:
            "Websites",

        serviceWebsitesDescription:
            "Thoughtful websites built around your brand, your audience and what your business needs to achieve.",


        serviceLandingTitle:
            "Landing Pages",

        serviceLandingDescription:
            "Focused pages built to communicate one clear idea, promote an offer and turn attention into action.",


        serviceMaintenanceTitle:
            "Website Maintenance",

        serviceMaintenanceDescription:
            "Keep your website healthy after launch with ongoing updates, fixes and improvements when you need them.",


        /* ABOUT */

        aboutEyebrow:
            "ABOUT",

        aboutTitle:
            "I build with more than<br>just the screen in mind.",

        aboutIntro:
            "I care about how something looks, but also about why it exists, who it is for and what it needs to accomplish.",

        aboutDescription:
            "With a background in logistics and operations and experience in web development, I naturally think in terms of structure, clarity and real-world needs.",


        /* ABOUT PANEL */

        aboutPanelEyebrow:
            "WHAT I BRING",

        aboutPanelStatus:
            "AVAILABLE FOR PROJECTS",

        aboutTechnicalTitle:
            "Technical",

        aboutTechnicalDescription:
            "HTML · CSS · JavaScript · Firebase",

        aboutBusinessTitle:
            "Business",

        aboutBusinessDescription:
            "Logistics · Operations · Processes",

        aboutApproachTitle:
            "Approach",

        aboutApproachDescription:
            "Clear · Practical · Human",


        /* PROCESS */

        processEyebrow:
            "PROCESS",

        processTitle:
            "No mystery. Just a clear way forward.",

        processDescription:
            "A straightforward process that keeps the work focused, collaborative and moving in the right direction.",


        processDiscoverTitle:
            "Discover",

        processDiscoverDescription:
            "Understand the business, goals and audience before writing a line of code.",


        processPlanTitle:
            "Plan",

        processPlanDescription:
            "Turn the idea into a clear structure, content direction and visual approach.",


        processBuildTitle:
            "Build",

        processBuildDescription:
            "Bring everything together into a responsive, functional and polished experience.",


        processLaunchTitle:
            "Launch",

        processLaunchDescription:
            "Test, refine and put the finished website where people can actually use it.",


        /* CONTACT */

        contactEyebrow:
            "CONTACT",

        contactTitle:
            "Got an idea? Let's make it useful.",

        contactDescription:
            "Whether you need a new website, a focused landing page or help keeping an existing site in shape, let's talk.",

        contactButton:
            "Start a project",


        /* FOOTER */

        footerLocation:
            "Portugal · 2026",

        footerCopyright:
            "© 2026 Thiago Hitalo",

        footerTagline:
            "Made with intent."

    },


    /* =====================================================
       PORTUGUÊS — PT-PT
       ===================================================== */

    pt: {

        /* HERO */

        heroEyebrow:
            "THIAGO HITALO · DESENVOLVIMENTO WEB",

        heroTitle:
            "Transformo ideias<br>em websites com propósito.",

        heroDescription:
            "Crio e desenvolvo websites e landing pages modernos, com foco na clareza, usabilidade e em objetivos reais de negócio.",

        heroPrimaryButton:
            "Iniciar um projeto",

        heroSecondaryButton:
            "Ver os meus projetos",

        mockupManifesto:
    "Websites que fazem sentido. Experiências que funcionam. Soluções com propósito.",


    // CONTACT FORM

        contactNote:
    "Conta-me um pouco sobre o que estás a criar e entrarei em contacto contigo.",

formNameLabel:
    "Nome",

formNamePlaceholder:
    "O teu nome",

formEmailLabel:
    "Email",

formEmailPlaceholder:
    "o-teu@email.com",

formCompanyLabel:
    "Empresa",

formCompanyPlaceholder:
    "Nome da empresa (opcional)",

formProjectTypeLabel:
    "De que precisas?",

formProjectTypePlaceholder:
    "Seleciona um serviço",

formWebsiteOption:
    "Website",

formLandingOption:
    "Landing Page",

formMaintenanceOption:
    "Manutenção de Website",

formOtherOption:
    "Outra coisa",

formMessageLabel:
    "Conta-me um pouco sobre o projeto",

formMessagePlaceholder:
    "O que gostarias de criar?",

formSubmitButton:
    "Enviar pedido",

formSuccess:
    "Obrigado — entrarei em contacto contigo.",

        /* HERO BROWSER */

        mockupEyebrow:
            "EXPERIÊNCIA DIGITAL",

        mockupTitle:
            "Criado para a web",

        mockupDescription:
            "Soluções digitais modernas pensadas para reforçar a presença das marcas online.",

        mockupButton:
            "Explorar",


        /* WORK */

        workEyebrow:
            "PROJETOS SELECIONADOS",

        workTitle:
            "Alguns projetos que criei para necessidades reais.",

        workDescription:
            "Websites e experiências digitais criados com um propósito — desde captar atenção até tornar um negócio mais fácil de compreender.",


        /* UNDONE */

        projectUndoneCategory:
            "WEBSITE · DESENVOLVIMENTO",

        projectUndoneDescription:
            "Uma experiência digital criada para dar a um negócio complexo uma presença online mais clara e profissional.",

        projectUndoneLink:
            "Ver projeto real",


        /* DENISE */

        projectDeniseCategory:
            "LANDING PAGE · DESENVOLVIMENTO",

        projectDeniseDescription:
            "Uma landing page moderna criada para apresentar serviços e reforçar a presença online.",

        projectDeniseLink:
            "Ver projeto",


        /* TRAVEL */

        projectTravelCategory:
            "WEBSITE · DESENVOLVIMENTO",

        projectTravelTitle:
            "AGÊNCIA DE VIAGENS",

        projectTravelDescription:
            "Um website de viagens pensado para inspirar, orientar visitantes e tornar a experiência simples, da descoberta à reserva.",

        projectTravelLink:
            "Ver projeto",


        /* SERVICES */

        servicesEyebrow:
            "SERVIÇOS",

        servicesTitle:
            "O website certo para o que estás a criar.",

        servicesDescription:
            "Foco-me em soluções digitais com um propósito claro: ajudar um negócio a comunicar melhor, apresentar-se melhor e crescer online.",


        serviceWebsitesTitle:
            "Websites",

        serviceWebsitesDescription:
            "Websites pensados à medida da tua marca, do teu público e do que o teu negócio precisa de alcançar.",


        serviceLandingTitle:
            "Landing Pages",

        serviceLandingDescription:
            "Páginas focadas em comunicar uma ideia clara, promover uma oferta e transformar atenção em ação.",


        serviceMaintenanceTitle:
            "Manutenção de Websites",

        serviceMaintenanceDescription:
            "Mantém o teu website atualizado depois do lançamento, com correções e melhorias sempre que precisares.",


        /* ABOUT */

        aboutEyebrow:
            "SOBRE",

        aboutTitle:
            "Crio a pensar em mais do que<br>apenas no ecrã.",

        aboutIntro:
            "Importa-me a forma como algo se apresenta, mas também o motivo de existir, para quem é e o que precisa de alcançar.",

        aboutDescription:
            "Com experiência em logística e operações e em desenvolvimento web, penso naturalmente em termos de estrutura, clareza e necessidades reais.",


        /* ABOUT PANEL */

        aboutPanelEyebrow:
            "O QUE TRAGO",

        aboutPanelStatus:
            "DISPONÍVEL PARA NOVOS PROJETOS",

        aboutTechnicalTitle:
            "Técnico",

        aboutTechnicalDescription:
            "HTML · CSS · JavaScript · Firebase",

        aboutBusinessTitle:
            "Visão de Negócio",

        aboutBusinessDescription:
            "Logística · Operações · Processos",

        aboutApproachTitle:
            "Abordagem",

        aboutApproachDescription:
            "Claro · Prático · Humano",


        /* PROCESS */

        processEyebrow:
            "PROCESSO",

        processTitle:
            "Sem complicações. Apenas um caminho claro.",

        processDescription:
            "Um processo simples que mantém o trabalho focado, colaborativo e no caminho certo.",


        processDiscoverTitle:
            "Descobrir",

        processDiscoverDescription:
            "Compreender o negócio, o público e o que significa ter sucesso antes de escrever uma linha de código.",


        processPlanTitle:
            "Planear",

        processPlanDescription:
            "Transformar a ideia numa estrutura clara, numa direção de conteúdo e numa abordagem visual.",


        processBuildTitle:
            "Construir",

        processBuildDescription:
            "Dar vida ao conceito através de uma experiência web responsiva, funcional e refinada.",


        processLaunchTitle:
            "Lançar",

        processLaunchDescription:
            "Testar, aperfeiçoar e colocar o website final online, pronto para ser utilizado.",


        /* CONTACT */

        contactEyebrow:
            "CONTACTO",

        contactTitle:
            "Tens uma ideia? Vamos torná-la útil.",

        contactDescription:
            "Se precisas de um novo website, uma landing page ou de ajuda para manter o teu site atualizado, vamos conversar.",

        contactButton:
            "Iniciar um projeto",


        /* FOOTER */

        footerLocation:
            "Portugal · 2026",

        footerCopyright:
            "© 2026 Thiago Hitalo",

        footerTagline:
            "Criado com propósito."

    },

    es: {

    /* HERO */

    heroEyebrow:
        "THIAGO HITALO · DESARROLLO WEB",

    heroTitle:
        "Transformo ideas<br>en sitios web con propósito.",

    heroDescription:
        "Diseño y desarrollo sitios web y landing pages modernos, con un enfoque en la claridad, la usabilidad y los objetivos reales de negocio.",

    heroPrimaryButton:
        "Iniciar un proyecto",

    heroSecondaryButton:
        "Ver mis proyectos",

    // CONTACT FORM     

    contactNote:
    "Cuéntame un poco sobre lo que estás creando y me pondré en contacto contigo.",

formNameLabel:
    "Nombre",

formNamePlaceholder:
    "Tu nombre",

formEmailLabel:
    "Email",

formEmailPlaceholder:
    "tu@email.com",

formCompanyLabel:
    "Empresa",

formCompanyPlaceholder:
    "Nombre de la empresa (opcional)",

formProjectTypeLabel:
    "¿Qué necesitas?",

formProjectTypePlaceholder:
    "Selecciona un servicio",

formWebsiteOption:
    "Sitio web",

formLandingOption:
    "Landing Page",

formMaintenanceOption:
    "Mantenimiento web",

formOtherOption:
    "Otra cosa",

formMessageLabel:
    "Cuéntame un poco sobre el proyecto",

formMessagePlaceholder:
    "¿Qué te gustaría crear?",

formSubmitButton:
    "Enviar solicitud",

formSuccess:
    "Gracias — me pondré en contacto contigo.",

    /* HERO BROWSER */

    mockupEyebrow:
        "EXPERIENCIA DIGITAL",

    mockupTitle:
        "Creado para la web",

    mockupDescription:
        "Soluciones digitales modernas pensadas para reforzar la presencia de las marcas en internet.",

    mockupButton:
        "Explorar",


    /* WORK */

    workEyebrow:
        "PROYECTOS SELECCIONADOS",

    workTitle:
        "Algunos proyectos que he creado para necesidades reales.",

    workDescription:
        "Sitios web y experiencias digitales creados con un propósito: desde captar la atención hasta hacer que un negocio sea más fácil de entender.",


    /* UNDONE */

    projectUndoneCategory:
        "SITIO WEB · DESARROLLO",

    projectUndoneDescription:
        "Una experiencia digital creada para dar a un negocio complejo una presencia online más clara y profesional.",

    projectUndoneLink:
        "Ver proyecto real",


    /* DENISE */

    projectDeniseCategory:
        "LANDING PAGE · DESARROLLO",

    projectDeniseDescription:
        "Una landing page moderna creada para presentar servicios y reforzar la presencia online.",

    projectDeniseLink:
        "Ver proyecto",


    /* TRAVEL */

    projectTravelCategory:
        "SITIO WEB · DESARROLLO",

    projectTravelTitle:
        "AGENCIA DE VIAJES",

    projectTravelDescription:
        "Un sitio web de viajes pensado para inspirar, orientar a los visitantes y hacer que la experiencia sea sencilla, desde el descubrimiento hasta la reserva.",

    projectTravelLink:
        "Ver proyecto",


    /* SERVICES */

    servicesEyebrow:
        "SERVICIOS",

    servicesTitle:
        "El sitio web adecuado para lo que estás creando.",

    servicesDescription:
        "Me enfoco en soluciones digitales con un propósito claro: ayudar a un negocio a comunicar mejor, presentarse mejor y crecer online.",


    serviceWebsitesTitle:
        "Sitios web",

    serviceWebsitesDescription:
        "Sitios web pensados para tu marca, tu público y lo que tu negocio necesita conseguir.",


    serviceLandingTitle:
        "Landing Pages",

    serviceLandingDescription:
        "Páginas enfocadas en comunicar una idea clara, promocionar una oferta y convertir la atención en acción.",


    serviceMaintenanceTitle:
        "Mantenimiento web",

    serviceMaintenanceDescription:
        "Mantén tu sitio web actualizado después del lanzamiento, con correcciones y mejoras siempre que las necesites.",


    /* ABOUT */

    aboutEyebrow:
        "SOBRE MÍ",

    aboutTitle:
        "Creo pensando en algo más que<br>solo la pantalla.",

    aboutIntro:
        "Me importa cómo se ve algo, pero también por qué existe, para quién está pensado y qué necesita conseguir.",

    aboutDescription:
        "Con experiencia en logística y operaciones y en desarrollo web, pienso de forma natural en términos de estructura, claridad y necesidades reales.",


    /* ABOUT PANEL */

    aboutPanelEyebrow:
        "LO QUE APORTO",

    aboutPanelStatus:
        "DISPONIBLE PARA NUEVOS PROYECTOS",

    aboutTechnicalTitle:
        "Técnico",

    aboutTechnicalDescription:
        "HTML · CSS · JavaScript · Firebase",

    aboutBusinessTitle:
        "Visión de negocio",

    aboutBusinessDescription:
        "Logística · Operaciones · Procesos",

    aboutApproachTitle:
        "Enfoque",

    aboutApproachDescription:
        "Claro · Práctico · Humano",


    /* PROCESS */

    processEyebrow:
        "PROCESO",

    processTitle:
        "Sin complicaciones. Solo un camino claro.",

    processDescription:
        "Un proceso sencillo que mantiene el trabajo enfocado, colaborativo y avanzando en la dirección correcta.",


    processDiscoverTitle:
        "Descubrir",

    processDiscoverDescription:
        "Comprender el negocio, el público y lo que significa tener éxito antes de escribir una sola línea de código.",


    processPlanTitle:
        "Planificar",

    processPlanDescription:
        "Convertir la idea en una estructura clara, una dirección de contenido y un enfoque visual.",


    processBuildTitle:
        "Construir",

    processBuildDescription:
        "Dar vida al concepto mediante una experiencia web adaptable, funcional y cuidada.",


    processLaunchTitle:
        "Lanzar",

    processLaunchDescription:
        "Probar, perfeccionar y poner el sitio web final online, listo para ser utilizado.",


    /* CONTACT */

    contactEyebrow:
        "CONTACTO",

    contactTitle:
        "¿Tienes una idea? Hagámosla útil.",

    contactDescription:
        "Si necesitas un sitio web nuevo, una landing page o ayuda para mantener tu sitio actualizado, hablemos.",

    contactButton:
        "Iniciar un proyecto",


    /* FOOTER */

    footerLocation:
        "Portugal · 2026",

    footerCopyright:
        "© 2026 Thiago Hitalo",

    footerTagline:
        "Creado con propósito.",

    mockupManifesto:
    "Sitios web que tienen sentido. Experiencias que funcionan. Soluciones con propósito.",

    },

    fr: {

    /* HERO */

    heroEyebrow:
        "THIAGO HITALO · DÉVELOPPEMENT WEB",

    heroTitle:
        "Je transforme les idées<br>en sites web utiles.",

    heroDescription:
        "Je conçois et développe des sites web et des landing pages modernes, avec un souci de clarté, d’ergonomie et d’objectifs concrets pour votre activité.",

    heroPrimaryButton:
        "Démarrer un projet",

    heroSecondaryButton:
        "Voir mes projets",


    // CONTACT FORM

    contactNote:
    "Parlez-moi un peu de ce que vous souhaitez créer et je reviendrai vers vous.",

formNameLabel:
    "Nom",

formNamePlaceholder:
    "Votre nom",

formEmailLabel:
    "Email",

formEmailPlaceholder:
    "vous@email.com",

formCompanyLabel:
    "Entreprise",

formCompanyPlaceholder:
    "Nom de l’entreprise (facultatif)",

formProjectTypeLabel:
    "De quoi avez-vous besoin ?",

formProjectTypePlaceholder:
    "Choisissez un service",

formWebsiteOption:
    "Site web",

formLandingOption:
    "Landing Page",

formMaintenanceOption:
    "Maintenance web",

formOtherOption:
    "Autre",

formMessageLabel:
    "Parlez-moi un peu de votre projet",

formMessagePlaceholder:
    "Que souhaitez-vous créer ?",

formSubmitButton:
    "Envoyer ma demande",

formSuccess:
    "Merci — je reviendrai vers vous.",

    /* HERO BROWSER */

    mockupEyebrow:
        "EXPÉRIENCE DIGITALE",

    mockupTitle:
        "Pensé pour le web",

    mockupDescription:
        "Des solutions digitales modernes conçues pour renforcer la présence des marques en ligne.",

    mockupButton:
        "Découvrir",


    /* WORK */

    workEyebrow:
        "PROJETS SÉLECTIONNÉS",

    workTitle:
        "Quelques projets que j’ai créés pour répondre à des besoins réels.",

    workDescription:
        "Des sites web et des expériences digitales conçus avec un objectif précis : attirer l’attention et rendre une activité plus claire et plus facile à comprendre.",


    /* UNDONE */

    projectUndoneCategory:
        "SITE WEB · DÉVELOPPEMENT",

    projectUndoneDescription:
        "Une expérience digitale conçue pour donner à une activité complexe une présence en ligne plus claire et plus professionnelle.",

    projectUndoneLink:
        "Voir le projet réel",


    /* DENISE */

    projectDeniseCategory:
        "LANDING PAGE · DÉVELOPPEMENT",

    projectDeniseDescription:
        "Une landing page moderne conçue pour présenter les services et renforcer la présence en ligne.",

    projectDeniseLink:
        "Voir le projet",


    /* TRAVEL */

    projectTravelCategory:
        "SITE WEB · DÉVELOPPEMENT",

    projectTravelTitle:
        "AGENCE DE VOYAGE",

    projectTravelDescription:
        "Un site de voyage pensé pour inspirer, guider les visiteurs et rendre l’expérience simple, de la découverte à la réservation.",

    projectTravelLink:
        "Voir le projet",


    /* SERVICES */

    servicesEyebrow:
        "SERVICES",

    servicesTitle:
        "Le site web qu’il vous faut pour ce que vous construisez.",

    servicesDescription:
        "Je me concentre sur des solutions digitales avec un objectif clair : aider une activité à mieux communiquer, mieux se présenter et se développer en ligne.",


    serviceWebsitesTitle:
        "Sites web",

    serviceWebsitesDescription:
        "Des sites web conçus autour de votre marque, de votre audience et de ce que votre activité cherche à accomplir.",


    serviceLandingTitle:
        "Landing Pages",

    serviceLandingDescription:
        "Des pages conçues pour transmettre une idée claire, promouvoir une offre et transformer l’attention en action.",


    serviceMaintenanceTitle:
        "Maintenance web",

    serviceMaintenanceDescription:
        "Gardez votre site à jour après son lancement grâce à des corrections, des mises à jour et des améliorations quand vous en avez besoin.",


    /* ABOUT */

    aboutEyebrow:
        "À PROPOS",

    aboutTitle:
        "Je crée en pensant<br>à plus qu’un simple écran.",

    aboutIntro:
        "Je m’intéresse à l’apparence d’un projet, mais aussi à sa raison d’être, à son public et à ce qu’il doit réellement accomplir.",

    aboutDescription:
        "Avec une expérience en logistique, en opérations et en développement web, je pense naturellement en termes de structure, de clarté et de besoins concrets.",


    /* ABOUT PANEL */

    aboutPanelEyebrow:
        "CE QUE J’APPORTE",

    aboutPanelStatus:
        "DISPONIBLE POUR DE NOUVEAUX PROJETS",

    aboutTechnicalTitle:
        "Technique",

    aboutTechnicalDescription:
        "HTML · CSS · JavaScript · Firebase",

    aboutBusinessTitle:
        "Vision métier",

    aboutBusinessDescription:
        "Logistique · Opérations · Processus",

    aboutApproachTitle:
        "Approche",

    aboutApproachDescription:
        "Claire · Pratique · Humaine",


    /* PROCESS */

    processEyebrow:
        "PROCESSUS",

    processTitle:
        "Sans complications. Juste une direction claire.",

    processDescription:
        "Un processus simple qui garde le travail ciblé, collaboratif et orienté dans la bonne direction.",


    processDiscoverTitle:
        "Découvrir",

    processDiscoverDescription:
        "Comprendre l’activité, le public et ce que signifie réussir avant d’écrire la moindre ligne de code.",


    processPlanTitle:
        "Planifier",

    processPlanDescription:
        "Transformer l’idée en une structure claire, une direction éditoriale et une approche visuelle.",


    processBuildTitle:
        "Construire",

    processBuildDescription:
        "Donner vie au concept à travers une expérience web responsive, fonctionnelle et soignée.",


    processLaunchTitle:
        "Lancer",

    processLaunchDescription:
        "Tester, perfectionner et mettre le site final en ligne, prêt à être utilisé.",


    /* CONTACT */

    contactEyebrow:
        "CONTACT",

    contactTitle:
        "Une idée ? Rendons-la utile.",

    contactDescription:
        "Vous avez besoin d’un nouveau site web, d’une landing page ou d’aide pour maintenir votre site à jour ? Parlons-en.",

    contactButton:
        "Démarrer un projet",


    /* FOOTER */

    footerLocation:
        "Portugal · 2026",

    footerCopyright:
        "© 2026 Thiago Hitalo",

    footerTagline:
        "Créé avec intention.",

    mockupManifesto:
    "Des sites web qui ont du sens. Des expériences qui fonctionnent. Des solutions pensées avec intention.",

    },

    de: {

    /* HERO */

    heroEyebrow:
        "THIAGO HITALO · WEBENTWICKLUNG",

    heroTitle:
        "Ich verwandle Ideen<br>in Websites, die etwas bewegen.",

    heroDescription:
        "Ich konzipiere und entwickle moderne Websites und Landing Pages mit Fokus auf Klarheit, Benutzerfreundlichkeit und echten Geschäftszielen.",

    heroPrimaryButton:
        "Projekt starten",

    heroSecondaryButton:
        "Meine Projekte ansehen",


    // CONTACT FORM

    contactNote:
    "Erzähl mir ein wenig davon, was du aufbauen möchtest, und ich melde mich bei dir.",

formNameLabel:
    "Name",

formNamePlaceholder:
    "Dein Name",

formEmailLabel:
    "E-Mail",

formEmailPlaceholder:
    "du@email.com",

formCompanyLabel:
    "Unternehmen",

formCompanyPlaceholder:
    "Name des Unternehmens (optional)",

formProjectTypeLabel:
    "Was brauchst du?",

formProjectTypePlaceholder:
    "Wähle eine Dienstleistung",

formWebsiteOption:
    "Website",

formLandingOption:
    "Landing Page",

formMaintenanceOption:
    "Website-Wartung",

formOtherOption:
    "Etwas anderes",

formMessageLabel:
    "Erzähl mir ein wenig über das Projekt",

formMessagePlaceholder:
    "Was möchtest du erstellen?",

formSubmitButton:
    "Projektanfrage senden",

formSuccess:
    "Danke — ich melde mich bei dir.",

    /* HERO BROWSER */

    mockupEyebrow:
        "DIGITALE ERFAHRUNG",

    mockupTitle:
        "Für das Web gemacht",

    mockupDescription:
        "Moderne digitale Lösungen, die Marken online stärker positionieren.",

    mockupButton:
        "Entdecken",


    /* WORK */

    workEyebrow:
        "AUSGEWÄHLTE PROJEKTE",

    workTitle:
        "Einige Projekte, die ich für reale Anforderungen entwickelt habe.",

    workDescription:
        "Websites und digitale Erlebnisse mit einem klaren Ziel – von mehr Aufmerksamkeit bis hin dazu, ein Unternehmen verständlicher zu machen.",


    /* UNDONE */

    projectUndoneCategory:
        "WEBSITE · ENTWICKLUNG",

    projectUndoneDescription:
        "Eine digitale Erfahrung, die einem komplexen Unternehmen zu einer klareren und professionelleren Online-Präsenz verhilft.",

    projectUndoneLink:
        "Echtes Projekt ansehen",


    /* DENISE */

    projectDeniseCategory:
        "LANDING PAGE · ENTWICKLUNG",

    projectDeniseDescription:
        "Eine moderne Landing Page, entwickelt, um Dienstleistungen klar zu präsentieren und die Online-Präsenz zu stärken.",

    projectDeniseLink:
        "Projekt ansehen",


    /* TRAVEL */

    projectTravelCategory:
        "WEBSITE · ENTWICKLUNG",

    projectTravelTitle:
        "REISEAGENTUR",

    projectTravelDescription:
        "Eine Reise-Website, die inspirieren, Besucher orientieren und die Reise von der Entdeckung bis zur Buchung einfacher machen soll.",

    projectTravelLink:
        "Projekt ansehen",


    /* SERVICES */

    servicesEyebrow:
        "SERVICES",

    servicesTitle:
        "Die richtige Website für das, was du aufbauen möchtest.",

    servicesDescription:
        "Ich konzentriere mich auf digitale Lösungen mit einem klaren Ziel: Unternehmen dabei zu helfen, besser zu kommunizieren, sich besser zu präsentieren und online zu wachsen.",


    serviceWebsitesTitle:
        "Websites",

    serviceWebsitesDescription:
        "Durchdachte Websites, die auf deine Marke, deine Zielgruppe und die Ziele deines Unternehmens abgestimmt sind.",


    serviceLandingTitle:
        "Landing Pages",

    serviceLandingDescription:
        "Fokussierte Seiten, die eine klare Idee vermitteln, ein Angebot präsentieren und Aufmerksamkeit in Handlung verwandeln.",


    serviceMaintenanceTitle:
        "Website-Wartung",

    serviceMaintenanceDescription:
        "Halte deine Website auch nach dem Launch aktuell – mit Updates, Fehlerbehebungen und Verbesserungen, wann immer du sie brauchst.",


    /* ABOUT */

    aboutEyebrow:
        "ÜBER MICH",

    aboutTitle:
        "Ich entwickle mit mehr als<br>nur dem Bildschirm im Blick.",

    aboutIntro:
        "Mir ist wichtig, wie etwas aussieht – aber auch, warum es existiert, für wen es gedacht ist und was es erreichen soll.",

    aboutDescription:
        "Mit Erfahrung in Logistik, operativen Abläufen und Webentwicklung denke ich ganz selbstverständlich in Strukturen, Klarheit und realen Anforderungen.",


    /* ABOUT PANEL */

    aboutPanelEyebrow:
        "WAS ICH MITBRINGE",

    aboutPanelStatus:
        "VERFÜGBAR FÜR NEUE PROJEKTE",

    aboutTechnicalTitle:
        "Technik",

    aboutTechnicalDescription:
        "HTML · CSS · JavaScript · Firebase",

    aboutBusinessTitle:
        "Business-Verständnis",

    aboutBusinessDescription:
        "Logistik · Operations · Prozesse",

    aboutApproachTitle:
        "Ansatz",

    aboutApproachDescription:
        "Klar · Praktisch · Menschlich",


    /* PROCESS */

    processEyebrow:
        "PROZESS",

    processTitle:
        "Keine Umwege. Nur ein klarer Weg nach vorn.",

    processDescription:
        "Ein einfacher Prozess, der die Arbeit fokussiert, kollaborativ und auf Kurs hält.",


    processDiscoverTitle:
        "Entdecken",

    processDiscoverDescription:
        "Verstehe das Unternehmen, die Zielgruppe und was Erfolg wirklich bedeutet, bevor eine einzige Zeile Code geschrieben wird.",


    processPlanTitle:
        "Planen",

    processPlanDescription:
        "Die Idee in eine klare Struktur, eine passende inhaltliche Richtung und einen visuellen Ansatz verwandeln.",


    processBuildTitle:
        "Entwickeln",

    processBuildDescription:
        "Das Konzept in eine responsive, funktionale und sorgfältig ausgearbeitete Web-Erfahrung verwandeln.",


    processLaunchTitle:
        "Veröffentlichen",

    processLaunchDescription:
        "Testen, verfeinern und die fertige Website online bringen – bereit für den echten Einsatz.",


    /* CONTACT */

    contactEyebrow:
        "KONTAKT",

    contactTitle:
        "Eine Idee? Machen wir etwas Sinnvolles daraus.",

    contactDescription:
        "Du brauchst eine neue Website, eine fokussierte Landing Page oder Unterstützung bei der Pflege deiner bestehenden Website? Lass uns reden.",

    contactButton:
        "Projekt starten",


    /* FOOTER */

    footerLocation:
        "Portugal · 2026",

    footerCopyright:
        "© 2026 Thiago Hitalo",

    footerTagline:
        "Mit Bedacht entwickelt.",

        mockupManifesto:
    "Websites, die überzeugen. Erfahrungen, die funktionieren. Lösungen mit Sinn.",

    }



};


/* =========================================================
   CHANGE LANGUAGE
   ========================================================= */

function setLanguage(language) {

    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }


    /* Normal text */

    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key = element.dataset.i18n;

        if (selectedTranslations[key] !== undefined) {

            element.textContent =
                selectedTranslations[key];

        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {

    const key = element.dataset.i18nPlaceholder;

    if (selectedTranslations[key] !== undefined) {

        element.placeholder =
            selectedTranslations[key];

    }

});


    /* HTML text
       Used when the translation contains <br>
    */

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {

        const key = element.dataset.i18nHtml;

        if (selectedTranslations[key] !== undefined) {

            element.innerHTML =
                selectedTranslations[key];

        }

    });


    /* Update document language */

    document.documentElement.lang = language;


    /* Save selected language */

    localStorage.setItem(
        "preferredLanguage",
        language
    );


    /* Update language button */

    const languageButton =
        document.querySelector(".language-button");

    if (languageButton) {

        languageButton.textContent =
            language.toUpperCase();

    }

}


/* =========================================================
   LANGUAGE MENU
   ========================================================= */

const languageButton =
    document.querySelector(".language-button");

const languageMenu =
    document.querySelector(".language-menu");


if (languageButton && languageMenu) {

    languageButton.addEventListener("click", () => {

        languageMenu.classList.toggle("is-open");

    });


    /* Language options */

    document
        .querySelectorAll(".language-menu button")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const language =
                    button.dataset.language;

                setLanguage(language);

                languageMenu.classList.remove("is-open");

            });

        });

}


/* =========================================================
   CLOSE LANGUAGE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (
        languageMenu &&
        languageButton &&
        !languageMenu.contains(event.target) &&
        !languageButton.contains(event.target)
    ) {

        languageMenu.classList.remove("is-open");

    }

});


/* =========================================================
   LOAD SAVED LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem("preferredLanguage") || "en";

setLanguage(savedLanguage);