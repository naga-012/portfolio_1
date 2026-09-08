import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  identity: {
    name: 'Nagarjun Myakala',
    title: 'AI Full Stack Developer & Data Analyst',
    tagline: 'Python • FastAPI • SQL • Power BI • React.js • Generative AI',
    status: 'Actively seeking full-time roles',
    location: 'Hyderabad, Telangana, India',
    email: 'myakalanagarjun@gmail.com',
    linkedin: 'https://linkedin.com/in/nagarjun-myakala-',
    github: 'https://github.com/naga-012',
    bio: 'Passionate builder at the intersection of production AI engineering and high-throughput data analytics. Experienced in designing microservices with FastAPI, optimizing SQL data warehouses, architecting interactive dashboards in Power BI, and delivering modern 3D web applications.',
  },

  stats: [
    {
      id: 'accuracy',
      value: '94.8%',
      numericValue: 94.8,
      suffix: '%',
      label: 'Model Accuracy',
      description: 'CNN + Grad-CAM detection on clinical MRI scans',
      icon: 'Target',
    },
    {
      id: 'pipeline',
      value: '40%',
      numericValue: 40,
      suffix: '%',
      label: 'Pipeline Latency Reduction',
      description: 'Streamlined asynchronous processing and query indexing',
      icon: 'Zap',
    },
    {
      id: 'dashboards',
      value: '5+',
      numericValue: 5,
      suffix: '+',
      label: 'BI Dashboards Deployed',
      description: 'Interactive DAX & Power Query enterprise reports',
      icon: 'BarChart3',
    },
    {
      id: 'records',
      value: '50k+',
      numericValue: 50,
      suffix: 'k+',
      label: 'Transactional Records',
      description: 'Processed with high-concurrency relational DBs',
      icon: 'Database',
    },
    {
      id: 'daily_rows',
      value: '100k+',
      numericValue: 100,
      suffix: 'k+',
      label: 'Daily Rows Cleaned',
      description: 'Automated ETL data ingestion & anomaly validation',
      icon: 'Layers',
    },
  ],

  education: {
    degree: 'B.E. in Information Technology',
    institution: 'Bharat Institute of Engineering & Technology (BIET)',
    period: '2022 – 2026',
    gpa: '7.2 / 10.0',
    highlights: [
      'Core coursework: Machine Learning, Database Management Systems, Data Structures & Algorithms',
      'Led technical workshops on Python automation and data analytics',
      'Developed multiple full-stack and deep-learning capstone projects',
    ],
  },

  experience: [
    {
      role: 'AI Developer & Junior Analyst Intern',
      company: 'Vangrove Tech Pvt Ltd',
      location: 'Hyderabad, India',
      period: 'Jun 2026 – Present',
      status: 'Current Role',
      achievements: [
        'Built and deployed end-to-end data pipelines processing 100k+ daily operational rows for enterprise analytics.',
        'Engineered predictive models and integrated them with FastAPI microservices for real-time inference.',
        'Created interactive executive Power BI dashboards with DAX measures, reducing monthly decision cycle turnaround by 35%.',
        'Collaborated with senior engineers on database normalization, indexing, and REST API documentation.',
      ],
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Power BI', 'DAX', 'ETL Pipelines', 'Pandas'],
    },
  ],

  skillCategories: [
    {
      id: 'languages',
      name: 'Languages & Core',
      tagline: 'Foundations of scalable logic and analytical manipulation',
      color: '#00F0FF',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'PostgreSQL', 'MySQL', 'JavaScript (ES6+)'],
    },
    {
      id: 'data-viz',
      name: 'Data & Visualization',
      tagline: 'Translating complex datasets into actionable business intelligence',
      color: '#F59E0B',
      skills: ['Power BI', 'DAX', 'Power Query', 'Advanced Excel', 'Statistical Modeling', 'Data Storytelling', 'Data Warehousing'],
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      tagline: 'High-throughput, asynchronous services and clean system architecture',
      color: '#8B5CF6',
      skills: ['FastAPI', 'Django', 'Node.js', 'RESTful Architecture', 'JWT Authentication', 'Asyncio', 'Pydantic'],
    },
    {
      id: 'infra',
      name: 'Infra & DevOps',
      tagline: 'Reliable deployment, version control, and data pipeline pipelines',
      color: '#10B981',
      skills: ['Git / GitHub', 'ETL Pipelines', 'Database Indexing', 'Linux / Bash', 'Docker (Basics)', 'Vercel'],
    },
  ],

  projects: [
    {
      id: 'health-connect',
      title: 'Health Connect Hub',
      shortDesc: 'Healthcare appointment scheduling platform with live slot management and analytics.',
      category: 'Full Stack',
      accentColor: '#00F0FF',
      featured: true,
      metrics: [
        { highlight: '45%', label: 'Latency Reduction' },
        { highlight: '30%', label: 'Slot Utilization Boost' },
      ],
      problem:
        'Patient booking bottlenecks and high no-show rates were causing severe operational inefficiencies and underutilized clinician calendar hours.',
      approach:
        'Architected an async backend using FastAPI and PostgreSQL with atomic booking transactions. Integrated an automated reminder dispatcher and constructed an executive Power BI telemetry dashboard to monitor capacity utilization.',
      result:
        'Achieved a 45% reduction in API response latency during peak morning registration hours and increased overall medical facility slot utilization by 30%.',
      techStack: ['FastAPI', 'PostgreSQL', 'Power BI', 'SQLAlchemy', 'Python', 'React'],
      image: '/projects/health-connect.jpg',
      links: {
        github: 'https://github.com/naga-012/health-connect-hub',
        live: 'https://health-connect-patient-booking.onrender.com',
        patientLive: 'https://health-connect-patient-booking.onrender.com',
        doctorLive: 'https://health-connect-doctor.onrender.com',
      },
    },
    {
      id: 'mri-tumor-detection',
      title: 'MRI Brain Tumor Detection',
      shortDesc: 'Deep-learning diagnostic aid classifying MRI slices with visual Grad-CAM explanations.',
      category: 'AI / ML',
      accentColor: '#EC4899',
      featured: true,
      metrics: [
        { highlight: '94.8%', label: 'Detection Accuracy' },
        { highlight: '<400ms', label: 'Inference Time' },
      ],
      problem:
        'Accurately detecting early-stage brain tumors requires extensive radiologist review, where diagnostic delays can impact critical care intervention.',
      approach:
        'Trained a customized Deep Convolutional Neural Network (CNN) with transfer learning and extensive data augmentation on thousands of clinical MRI scans. Implemented Grad-CAM to highlight influential spatial regions for explainable AI in a Streamlit diagnostic interface.',
      result:
        'Delivered 94.8% test accuracy across multiple tumor classifications with sub-400ms inference turnaround, enhancing diagnostic confidence with interpretable visual heatmaps.',
      techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Grad-CAM', 'Streamlit', 'Python', 'NumPy'],
      image: '/projects/mri-tumor.jpg',
      links: {
        github: 'https://github.com/naga-012/mri-brain-tumor-detection',
        demo: 'https://mri-tumor-ai.demo.app',
      },
    },
    {
      id: 'mensverse-3d',
      title: 'MENSVERSE 3D Store',
      shortDesc: 'Futuristic 3D e-commerce showcase featuring dynamic garment customizers and real-time inventory.',
      category: '3D Web',
      accentColor: '#8B5CF6',
      featured: true,
      metrics: [
        { highlight: '<800ms', label: '3D Model Render Time' },
        { highlight: '100%', label: 'Real-Time Admin Sync' },
      ],
      problem:
        'Standard e-commerce product grids provide flat representation, leading to high cart abandonment and customer hesitation over fit and fabric aesthetic.',
      approach:
        'Engineered an interactive 3D virtual showroom utilizing React Three Fiber and Three.js with custom PBR lighting, GLTF compression, and Zustand state synchronization. Backed by Node.js and MongoDB for real-time inventory adjustments.',
      result:
        'Reduced 3D asset initialization to under 800ms, providing 60fps smooth OrbitControls, fabric swatch toggles, and live cart synchronizations.',
      techStack: ['React', 'Three.js', 'React Three Fiber', 'Zustand', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: '/projects/mensverse-3d.jpg',
      links: {
        github: 'https://github.com/naga-012/mensverse-3d-store',
        live: 'https://saha-customer-site.onrender.com',
        customerLive: 'https://saha-customer-site.onrender.com',
        adminLive: 'https://saha-admin-site.onrender.com',
      },
    },
    {
      id: 'inti-ruchi',
      title: 'Inti Ruchi Food Platform',
      shortDesc: 'Hyperlocal homemade culinary platform featuring transparent 5-stage order tracking.',
      category: 'Full Stack',
      accentColor: '#10B981',
      featured: true,
      metrics: [
        { highlight: '5-Stage', label: 'Live Status Pipeline' },
        { highlight: 'Zero-Mock', label: 'Production JWT Auth' },
      ],
      problem:
        'Home-cook marketplaces frequently struggle with order visibility and trust, leaving both consumers and chefs uncertain of kitchen preparation states.',
      approach:
        'Developed a complete platform featuring a FastAPI backend with SQLite/PostgreSQL, role-based JWT security, and a responsive React/Vite frontend. Implemented a zero-mock state machine that streams real-time status updates through 5 distinct order lifecycle phases.',
      result:
        'Successfully deployed a transparent order tracker with instantaneous customer notifications, zero state inconsistencies, and an intuitive kitchen dispatch board.',
      techStack: ['FastAPI', 'React', 'Vite', 'SQLite', 'JWT', 'Python', 'Tailwind CSS'],
      image: '/projects/inti-ruchi.jpg',
      links: {
        github: 'https://github.com/naga-012/inti-ruchi-food-platform',
        live: 'https://inti-ruchi-frontend.onrender.com',
        customerLive: 'https://inti-ruchi-frontend.onrender.com',
        adminLive: 'https://inti-ruchi-admin.onrender.com',
      },
    },
  ],

  resumes: [
    {
      id: 'ai-dev',
      title: 'AI Full Stack Developer Resume',
      filename: 'Nagarjun_Myakala_AI_FullStack.pdf',
      summary: 'Tailored for roles focusing on Python, FastAPI, Machine Learning, Deep Learning, and React Full Stack Engineering.',
      highlights: [
        'Production microservices with FastAPI, PostgreSQL & Docker',
        'Deep learning pipelines (PyTorch, TensorFlow, CNNs, Grad-CAM)',
        'Full stack React & 3D Interactive Web (Three.js / R3F)',
      ],
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst Resume',
      filename: 'Nagarjun_Myakala_Data_Analyst.pdf',
      summary: 'Tailored for roles in Business Intelligence, ETL Pipelines, SQL Data Modeling, and Executive Reporting.',
      highlights: [
        'Advanced Power BI dashboard development with DAX & Power Query',
        'Complex SQL queries, database indexing, and normalization',
        'Automated ETL processing over 100k+ records per day',
      ],
    },
  ],
};
