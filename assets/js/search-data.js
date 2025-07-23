// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presented-my-paper-large-language-models-as-attribution-regularizers-for-efficient-model-training-at-the-the-3rd-world-conference-on-explainable-artificial-intelligence",
          title: 'Presented my paper Large Language Models as Attribution Regularizers for Efficient Model Training...',
          description: "",
          section: "News",},{id: "projects-abslrp-amp-global-attribution-evaluation",
          title: 'absLRP &amp;amp; Global Attribution Evaluation',
          description: "Visualize Vision Transformer attribution maps and evaluate attribution methods globally.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/abslrp/";
            },},{id: "projects-dg-connect-procurement-tenders",
          title: 'DG Connect Procurement Tenders',
          description: "Interpretable classification for analyzing innovation criteria in EU procurement tenders.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dgcnect/";
            },},{id: "projects-attribution-eval-metrics-and-human-perception",
          title: 'Attribution Eval Metrics and Human Perception',
          description: "Evaluating the alignment between human perception and evaluation metrics for attribution-based methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/harmony/";
            },},{id: "projects-llm-attribution-aligned-training",
          title: 'LLM Attribution Aligned Training',
          description: "Use LLMs as training regularizers for small models and significantly improve their generalization ability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/laat/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%6F%72.%76%75%6B%61%64%69%6E@%66%65%72.%68%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/davor10105", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/davor-vukadin-596aaa1b7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Cud3BiMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
