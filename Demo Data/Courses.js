var courses = [
  {
    id: 'course1',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with Python.',
    instructorId: 'jane_smith',
    modules: [
      {
        id: 'module1',
        title: 'Getting Started',
        content: 'Basics of Python programming.',
      },
      {
        id: 'module2',
        title: 'Control Structures',
        content: 'Learn about loops and conditionals.',
      },
    ],
    assessments: [
      {
        id: 'assessment1',
        title: 'Python Basics Quiz',
        questions: [
          {
            question: 'What is a variable?',
            options: ['Data storage', 'Function', 'Class'],
            answer: 'Data storage',
          },
        ],
      },
    ],
  },
  {
    id: 'course2',
    title: 'Advanced JavaScript',
    description: 'Deep dive into modern JavaScript and frameworks.',
    instructorId: 'bob_brown',
    modules: [
      {
        id: 'module1',
        title: 'ES6 Features',
        content: 'Explore new features in ES6.',
      },
      {
        id: 'module2',
        title: 'Async Programming',
        content: 'Understanding Promises and Async/Await.',
      },
    ],
    assessments: [
      {
        id: 'assessment2',
        title: 'JavaScript Quiz',
        questions: [
          {
            question: 'What is a Promise?',
            options: [
              'A data structure',
              'An object representing future completion',
              'A function',
            ],
            answer: 'An object representing future completion',
          },
        ],
      },
    ],
  },
  {
    id: 'course3',
    title: 'Data Science with R',
    description: 'Comprehensive course on data analysis with R.',
    instructorId: 'david_black',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to R',
        content: 'Basics of the R programming language.',
      },
      {
        id: 'module2',
        title: 'Data Visualization',
        content: 'Learn how to visualize data with ggplot2.',
      },
    ],
    assessments: [
      {
        id: 'assessment3',
        title: 'R Programming Quiz',
        questions: [
          {
            question: 'What is ggplot2?',
            options: [
              'A package for visualization',
              'A data manipulation library',
              'An R function',
            ],
            answer: 'A package for visualization',
          },
        ],
      },
    ],
  },
  {
    id: 'course4',
    title: 'Web Development Bootcamp',
    description: 'Full-stack web development course.',
    instructorId: 'frank_blue',
    modules: [
      {
        id: 'module1',
        title: 'HTML & CSS',
        content: 'Basics of web design with HTML and CSS.',
      },
      {
        id: 'module2',
        title: 'Backend Development',
        content: 'Introduction to server-side programming with Node.js.',
      },
    ],
    assessments: [
      {
        id: 'assessment4',
        title: 'Web Dev Quiz',
        questions: [
          {
            question: 'What is Node.js?',
            options: [
              'A database',
              'A runtime environment',
              'A JavaScript framework',
            ],
            answer: 'A runtime environment',
          },
        ],
      },
    ],
  },
  {
    id: 'course5',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning and AI.',
    instructorId: 'grace_pink',
    modules: [
      {
        id: 'module1',
        title: 'Supervised Learning',
        content: 'Understanding supervised learning algorithms.',
      },
      {
        id: 'module2',
        title: 'Unsupervised Learning',
        content: 'Explore clustering and dimensionality reduction techniques.',
      },
    ],
    assessments: [
      {
        id: 'assessment5',
        title: 'ML Quiz',
        questions: [
          {
            question: 'What is supervised learning?',
            options: [
              'Learning with labeled data',
              'Learning with unlabeled data',
              'Learning without data',
            ],
            answer: 'Learning with labeled data',
          },
        ],
      },
    ],
  },
  {
    id: 'course6',
    title: 'Cybersecurity Basics',
    description: 'Learn the fundamental concepts of cybersecurity.',
    instructorId: 'hank_orange',
    modules: [
      {
        id: 'module1',
        title: 'Network Security',
        content: 'Basics of securing networks.',
      },
      {
        id: 'module2',
        title: 'Cryptography',
        content: 'Introduction to encryption and decryption.',
      },
    ],
    assessments: [
      {
        id: 'assessment6',
        title: 'Security Quiz',
        questions: [
          {
            question: 'What is encryption?',
            options: [
              'Process of securing data',
              'Process of data analysis',
              'Process of data entry',
            ],
            answer: 'Process of securing data',
          },
        ],
      },
    ],
  },
  {
    id: 'course7',
    title: 'Introduction to Cloud Computing',
    description: 'Overview of cloud computing concepts and services.',
    instructorId: 'leo_magenta',
    modules: [
      {
        id: 'module1',
        title: 'Cloud Models',
        content: 'Understanding SaaS, PaaS, and IaaS.',
      },
      {
        id: 'module2',
        title: 'Cloud Providers',
        content: 'Overview of major cloud service providers.',
      },
    ],
    assessments: [
      {
        id: 'assessment7',
        title: 'Cloud Quiz',
        questions: [
          {
            question: 'What is SaaS?',
            options: [
              'Software as a Service',
              'System as a Service',
              'Storage as a Service',
            ],
            answer: 'Software as a Service',
          },
        ],
      },
    ],
  },
  {
    id: 'course8',
    title: 'Front-end Development',
    description: 'Build modern and responsive front-end applications.',
    instructorId: 'mona_lime',
    modules: [
      {
        id: 'module1',
        title: 'HTML5 & CSS3',
        content: 'Advanced HTML5 and CSS3 techniques.',
      },
      {
        id: 'module2',
        title: 'JavaScript Frameworks',
        content: 'Introduction to React and Vue.js.',
      },
    ],
    assessments: [
      {
        id: 'assessment8',
        title: 'Front-end Quiz',
        questions: [
          {
            question: 'What is React?',
            options: [
              'A JavaScript library',
              'A CSS framework',
              'A database system',
            ],
            answer: 'A JavaScript library',
          },
        ],
      },
    ],
  },
  {
    id: 'course9',
    title: 'Database Management Systems',
    description: 'Comprehensive course on database systems and SQL.',
    instructorId: 'nina_violet',
    modules: [
      {
        id: 'module1',
        title: 'SQL Basics',
        content: 'Introduction to SQL and database queries.',
      },
      {
        id: 'module2',
        title: 'Database Design',
        content: 'Designing relational databases and schema design.',
      },
    ],
    assessments: [
      {
        id: 'assessment9',
        title: 'DB Quiz',
        questions: [
          {
            question: 'What is a relational database?',
            options: [
              'A database with related tables',
              'A database without tables',
              'A database that stores unstructured data',
            ],
            answer: 'A database with related tables',
          },
        ],
      },
    ],
  },
  {
    id: 'course10',
    title: 'DevOps Essentials',
    description: 'Learn the basics of DevOps practices and tools.',
    instructorId: 'oliver_brown',
    modules: [
      {
        id: 'module1',
        title: 'CI/CD Pipelines',
        content:
          'Introduction to Continuous Integration and Continuous Deployment.',
      },
      {
        id: 'module2',
        title: 'Infrastructure as Code',
        content:
          'Understanding infrastructure automation with tools like Terraform.',
      },
    ],
    assessments: [
      {
        id: 'assessment10',
        title: 'DevOps Quiz',
        questions: [
          {
            question: 'What is CI/CD?',
            options: [
              'Continuous Integration and Continuous Deployment',
              'Continuous Integration and Continuous Development',
              'Continuous Improvement and Continuous Deployment',
            ],
            answer: 'Continuous Integration and Continuous Deployment',
          },
        ],
      },
    ],
  },
  {
    id: 'course11',
    title: 'Digital Marketing Basics',
    description: 'Introduction to digital marketing strategies and tools.',
    instructorId: 'paula_gray',
    modules: [
      {
        id: 'module1',
        title: 'SEO Basics',
        content: 'Fundamentals of Search Engine Optimization.',
      },
      {
        id: 'module2',
        title: 'Social Media Marketing',
        content: 'Effective strategies for social media marketing.',
      },
    ],
    assessments: [
      {
        id: 'assessment11',
        title: 'Marketing Quiz',
        questions: [
          {
            question: 'What is SEO?',
            options: [
              'Search Engine Optimization',
              'Social Engagement Optimization',
              'Search Engine Operation',
            ],
            answer: 'Search Engine Optimization',
          },
        ],
      },
    ],
  },
  {
    id: 'course12',
    title: 'Introduction to Artificial Intelligence',
    description: 'Basics of AI and machine learning concepts.',
    instructorId: 'quinn_silver',
    modules: [
      {
        id: 'module1',
        title: 'AI Fundamentals',
        content: 'Understanding the basics of artificial intelligence.',
      },
      {
        id: 'module2',
        title: 'Machine Learning Models',
        content: 'Introduction to common machine learning models.',
      },
    ],
    assessments: [
      {
        id: 'assessment12',
        title: 'AI Quiz',
        questions: [
          {
            question: 'What is a neural network?',
            options: [
              'A machine learning model',
              'A type of database',
              'A software framework',
            ],
            answer: 'A machine learning model',
          },
        ],
      },
    ],
  },
  {
    id: 'course13',
    title: 'Advanced SQL',
    description: 'In-depth SQL techniques and advanced queries.',
    instructorId: 'rachel_gold',
    modules: [
      {
        id: 'module1',
        title: 'Complex Joins',
        content: 'Understanding complex joins and subqueries.',
      },
      {
        id: 'module2',
        title: 'Performance Tuning',
        content: 'Optimizing SQL queries for better performance.',
      },
    ],
    assessments: [
      {
        id: 'assessment13',
        title: 'SQL Quiz',
        questions: [
          {
            question: 'What is a subquery?',
            options: [
              'A query within another query',
              'A database backup',
              'A type of index',
            ],
            answer: 'A query within another query',
          },
        ],
      },
    ],
  },
  {
    id: 'course14',
    title: 'User Experience Design',
    description: 'Introduction to UX design principles and practices.',
    instructorId: 'steve_blue',
    modules: [
      {
        id: 'module1',
        title: 'UX Fundamentals',
        content: 'Basics of user experience design.',
      },
      {
        id: 'module2',
        title: 'Design Thinking',
        content: 'Understanding the design thinking process.',
      },
    ],
    assessments: [
      {
        id: 'assessment14',
        title: 'UX Quiz',
        questions: [
          {
            question: 'What is user experience?',
            options: [
              'Overall experience of a user with a product',
              'A marketing strategy',
              'A type of graphic design',
            ],
            answer: 'Overall experience of a user with a product',
          },
        ],
      },
    ],
  },
  {
    id: 'course15',
    title: 'Agile Project Management',
    description:
      'Learn the principles and practices of Agile project management.',
    instructorId: 'tina_purple',
    modules: [
      {
        id: 'module1',
        title: 'Agile Principles',
        content: 'Overview of Agile principles and methodologies.',
      },
      {
        id: 'module2',
        title: 'Scrum Framework',
        content: 'Introduction to Scrum roles, events, and artifacts.',
      },
    ],
    assessments: [
      {
        id: 'assessment15',
        title: 'Agile Quiz',
        questions: [
          {
            question: 'What is Scrum?',
            options: [
              'An Agile framework',
              'A type of database',
              'A project management tool',
            ],
            answer: 'An Agile framework',
          },
        ],
      },
    ],
  },
  {
    id: 'course16',
    title: 'Blockchain Basics',
    description: 'Introduction to blockchain technology and its applications.',
    instructorId: 'uys_olive',
    modules: [
      {
        id: 'module1',
        title: 'Blockchain Fundamentals',
        content: 'Understanding blockchain technology and its components.',
      },
      {
        id: 'module2',
        title: 'Cryptocurrency',
        content: 'Introduction to cryptocurrencies and their workings.',
      },
    ],
    assessments: [
      {
        id: 'assessment16',
        title: 'Blockchain Quiz',
        questions: [
          {
            question: 'What is a blockchain?',
            options: [
              'A decentralized ledger',
              'A type of software',
              'A form of currency',
            ],
            answer: 'A decentralized ledger',
          },
        ],
      },
    ],
  },
  {
    id: 'course17',
    title: 'Digital Photography',
    description: 'Basics of digital photography and photo editing.',
    instructorId: 'vicky_teal',
    modules: [
      {
        id: 'module1',
        title: 'Camera Settings',
        content: 'Understanding camera settings and exposure.',
      },
      {
        id: 'module2',
        title: 'Photo Editing',
        content: 'Basic photo editing techniques using software.',
      },
    ],
    assessments: [
      {
        id: 'assessment17',
        title: 'Photography Quiz',
        questions: [
          {
            question: 'What is exposure in photography?',
            options: [
              'Amount of light reaching the sensor',
              'A type of camera lens',
              'A photo editing technique',
            ],
            answer: 'Amount of light reaching the sensor',
          },
        ],
      },
    ],
  },
  {
    id: 'course18',
    title: 'Creative Writing',
    description: 'Develop your creative writing skills and techniques.',
    instructorId: 'walt_brown',
    modules: [
      {
        id: 'module1',
        title: 'Writing Techniques',
        content: 'Exploring different writing techniques and styles.',
      },
      {
        id: 'module2',
        title: 'Storytelling',
        content: 'Understanding the elements of storytelling.',
      },
    ],
    assessments: [
      {
        id: 'assessment18',
        title: 'Writing Quiz',
        questions: [
          {
            question: 'What is a narrative arc?',
            options: [
              'The structure of a story',
              'A type of writing technique',
              'A form of poetry',
            ],
            answer: 'The structure of a story',
          },
        ],
      },
    ],
  },
  {
    id: 'course19',
    title: 'Financial Accounting',
    description:
      'Introduction to financial accounting principles and practices.',
    instructorId: 'xander_gray',
    modules: [
      {
        id: 'module1',
        title: 'Accounting Basics',
        content: 'Overview of accounting principles and practices.',
      },
      {
        id: 'module2',
        title: 'Financial Statements',
        content: 'Understanding balance sheets and income statements.',
      },
    ],
    assessments: [
      {
        id: 'assessment19',
        title: 'Accounting Quiz',
        questions: [
          {
            question: 'What is a balance sheet?',
            options: [
              'A financial statement showing assets and liabilities',
              'A type of accounting software',
              'A form of tax document',
            ],
            answer: 'A financial statement showing assets and liabilities',
          },
        ],
      },
    ],
  },
  {
    id: 'course20',
    title: 'Introduction to Sociology',
    description: 'Explore the basics of sociology and social behavior.',
    instructorId: 'yara_white',
    modules: [
      {
        id: 'module1',
        title: 'Sociological Theories',
        content: 'Overview of major sociological theories.',
      },
      {
        id: 'module2',
        title: 'Social Institutions',
        content: 'Understanding social institutions and their roles.',
      },
    ],
    assessments: [
      {
        id: 'assessment20',
        title: 'Sociology Quiz',
        questions: [
          {
            question: 'What is social stratification?',
            options: [
              'A system of social ranking',
              'A type of social behavior',
              'A form of social policy',
            ],
            answer: 'A system of social ranking',
          },
        ],
      },
    ],
  },
];
