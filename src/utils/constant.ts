import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MobileAppIcon,
  CloudIcon,
  EcommerceIcon,
  CustomIcon,
  ApplicationsIcon,
  LearningIcon,
} from '@/components/icon';
import {
  SliderImage,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  AIImg,
  ComputerVision,
  CustomSoftwareDev,
  DataScience,
  DeepLearning,
  ERPImg,
  kubernetes,
  MLImg,
  NeuralNetwork,
  NLPImg,
  NovelAlgo,
  ProfilePicImg,
  AngularImg,
  AzureImg,
  CloudImg,
  FlaskImg,
  PaythonImg,
  ReactImg,
  RedisImg,
  MicrosftDotnetImg,
  FlutterImg,
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
  BlogImg2,
  BlogImg1,
  NewHome1,
  NewHome2,
  NewHome3,
  JavaScript,
  NewHome4,
  Testimonial1,
  Testimonial2,
  Testimonial3,
  BlogImg3,
  Service9,
  Service10,
  Service11,
  Service12,
  Service13,
  Service14,
  AzureAndGCP,
  NetCore,
  Postgres,
  MultipleBusiness,
  PharmaSector,
  HospitalSector,
} from '../../public/images';
import LinkedinIcon from '@/components/icon/linkedinIcon';

export const HeaderMenu = [
  {
    id: 1,
    name: 'Home',
    url: '/#home',
  },
  {
    id: 2,
    name: 'About Us',
    url: '/#about-us',
  },
  {
    id: 3,
    name: 'Services',
    url: '/#services',
  },{
    id: 7,
    name: 'ERP',
    url: '/erp-applications',
  },
  {
    id: 4,
    name: 'Blog',
    url: '/#blog',
  },
  {
    id: 5,
    name: 'Pricing',
    url: '/pricing',
  },
  {
    id: 6,
    name: 'Contact',
    url: '/#contact',
  },
];

export const HomeBannerCo = [
  {
    images: NewHome1,
    // title: 'We Build Software and Web Apps for Businesses',
    // content: 'Fast, reliable and modern solutions for businesses',
    // buttonName: 'Get Started',
    buttonUrl: '/web-applications',
  },
  {
    images: NewHome2,
    // title: 'Product and offshore software services',
    // content: "We build custom software solutions tailored to your unique business needs.",
    // buttonName: 'Learn More',
    buttonUrl: '/custom-software-solutions',
  },
  {
    images: NewHome3,
    // title: 'Web Application Development',
    // content: 'We develop web applications that are secure, scalable, and easy to maintain.',
    // buttonName: 'Get Started',
    buttonUrl: '/product-and-web-development',
  },
  {
    images: NewHome4,
    // title: 'Web Application Development',
    // content: 'We develop web applications that are secure, scalable, and easy to maintain.',
    // buttonName: 'Get Started',
    buttonUrl: '/#about-us',
  },
];

export const ERPCapabilities = [
  {
    id: '1',
    title : 'Multiple Businesses', 
    image : MultipleBusiness,
    features : [
       'Streamlined Processes',
       'Lower Operational Costs',
       'Automation for Efficiency',
       'Lower Operational Costs',
       'User-Friendly Dashboard',
       '360° Patient Safety',
       'Improved Inventory Management',
       'Patient Safety Measures',
       'Inventory Optimization',
       'Enhanced Data Security'
    ]

  },
  {
    id: '2',
    title : 'Pharma Sector', 
    image : PharmaSector,
    features : [
      'Inventory Management',
      'MPS/MRP',
      'Sales & Purchase',
      'Warehouse Management',
      'Production Management',
      'Lot Traceability',
      'Formulation Management',
      'Regulatory Compliance',
      'Costing Analysis',
      'QC/QA'
    ]

  },
  {
    id: '2',
    title : 'Hospitals', 
    image : HospitalSector  ,
    features : [
      'Appointment',
      'Certificate',
      'Reports',
      'Cloud database',
      'Inventory',
      'File manager',
      'Prescription',
      'Nursing Notes',
      'OPD/IPD',
      'Billing & Accounting',
      'Bed Status'
    ]

  }
];

export const HomePara = [
  {
    id: '1',
    text: ' Are you looking for the best in class website application that can manage your healthcare data hassle freely in just few clicks? Take a sigh of relief, you are @ the right page. MyAlgoSoft is a Technology Startup that provides the solutions for digital journey, working with Cloud and New Age Technology Stacks.',
  },
  {
    id: '2',
    text: ' We are here to take care of your healthcare data dynamically no matter if its hospital,pharmacy, laboratory or medical store. We serve everyone that comes under our healthcare domain roof.',
  },
  {
    id: '3',
    text: 'We create the secure, scalable, well maintained and advanced web applications. We are driven by the on demand product development services that are cost effective and reliable in order to cater your needs in no time; we are persistent in our commitment.',
  },
  {
    id: '3',
    text: 'On the top of our product, we also outsource the dedicated software team that elevates your business and fulfills your professional commitments.',
  },
];

export const AboutConter = [
  {
    number: '10',
    title: 'Team members',
  },
  {
    number: '1',
    title: 'Countries',
  },
  {
    number: '1',
    title: 'Continents',
  },
  {
    number: '1',
    title: 'Businesses',
  },
];

export const AboutContent = [
  // {
  //     title: 'Experience you can trust',
  //     subText: 'At MyAlgoSoft, we have years of experience in developing applications that meet the highest industry standards. We strive to provide our clients with the best possible service and customer satisfaction.',
  // },
  {
    title: 'On-demand product development',
    subText:
      "We understand how important it is to have a product that meets all your requirements and works perfectly across different platforms. That's why we offer on-demand product development services, so you can get the exact results you want in no time.",
  },
  {
    title: 'Unlock Your True Potential',
    subText:
      'Our team is equipped with the latest tools and technology to ensure that we create the most effective solutions for your business needs. Our process combines excellence with execution, giving you an edge against your competition.',
  },
  {
    title: 'Endless Possibilities',
    subText:
      'myalgosoft.com offers a wide range of services, from on-demand product development to web and mobile app development. We provide tailored solutions that are cost-effective and reliable, so you can trust in our products for years to come.',
  },
  {
    title: 'Stay Ahead of the Curve',
    subText:
      'Our team is always on the lookout for new technologies, techniques, and trends so that we can stay ahead of the curve when it comes to creating innovative solutions for our clients. Get in touch with us today to get started on your digital journey!',
  },
];

export const OurTechStackItem = [
  // {
  //     images: AIImg,
  //     title: 'Artificial Intelligence',
  // },
  // {
  //     images: DataScience,
  //     title: 'Data Science',
  // },
  // {
  //     images: MLImg,
  //     title: 'Machine Learning',
  // },
  // {
  //     images: DeepLearning,
  //     title: 'Deep Learning',
  // },
  // {
  //     images: NeuralNetwork,
  //     title: 'Neural Network',
  // },
  // {
  //     images: NLPImg,
  //     title: 'Natural Language Processing',
  // },
  // {
  //     images: ComputerVision,
  //     title: 'Computer Vision',
  // },

  {
    images: kubernetes,
    title: 'Azure SQL',
  },
  {
    images: ERPImg,
    title: 'Python',
  },
  {
    images: NovelAlgo,
    title: 'Flask',
  },
  {
    images: CustomSoftwareDev,
    title: 'JavaScript',
  },
];

export const OurTeam = [
  {
    images: ProfilePicImg,
    // name: 'George Nachman',
    dissertation: 'Sr Developer',
    description:
      'George spearheads various engineering initiatives across our tech stack. He has done a little bit of everything in his career from client to server, including maintaining the popular open source project iTerm2.',
  },
  {
    images: ProfilePicImg,
    // name: 'JT DiMartile',
    dissertation: 'UI/UX Developer',
    description:
      'Founding designer focused on product and seamless user experience. Formerly Senior Staff Designer at Google with adventures on Android, Research and Machine Intelligence, Google Dialer, Android System UI, and Material 1 and 3.',
  },
  {
    images: ProfilePicImg,
    // name: 'Jason Bacasa',
    dissertation: 'Application Architect',
    description:
      'Drives branding endeavors. Jason met David in a coffee shop in Pittsburgh where he served David stiff espressos as they contemplated what a future would look like when everyone had a computer in their pocket.',
  },
  {
    images: ProfilePicImg,
    // name: 'Noah Lieberman',
    dissertation: 'Database Developer',
    description:
      'Founding Engineer. With a strong foundation in Machine Learning and Systems Engineering, Noah is designing and developing our core AI applications.',
  },
  {
    images: ProfilePicImg,
    // name: 'Database Developer',
    dissertation: 'Machine Learning Engineer',
    description:
      'George spearheads various engineering initiatives across our tech stack. He has done a little bit of everything in his career from client to server, including maintaining the popular open source project iTerm2.',
  },
  {
    images: ProfilePicImg,
    // name: 'Database Developer',
    dissertation: 'Flutter Developer',
    description:
      "Leads our ongoing recruitment efforts. Daniel is the creator of Android's Barcode Scanner and Google Shopper, and worked as UI lead for Google's self-driving cars.",
  },
];

export const ContactUsinfo = [
  {
    icon: LocationIcon,
    description:
      'H-203, Shukan Platinum Appt, Opp. Satyam Hospital, Nr. Vandemataram City, Ahmedabad, Gujarat, India - 382481',
  },
  {
    icon: PhoneIcon,
    description: '(+91) 8758297625',
    url: 'tal:+918758297625',
  },
  {
    icon: EmailIcon,
    description: 'admin@myalgosoft.com',
    url: 'mailto:admin@myalgosoft.com',
  },
];

export const SocialIcon = [
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/admin-myalgosoft-llp-104b7429b',
    target: '_blank',
  },
];

export const TechnologyCon = [
  {
    id: '01',
    images: ReactImg,
    title: 'React JS',
    description:
      'We are the best react development company that you can trust for your project idea. We offer custom react development, React Native MVP Development, React UI development, React Native Cross-Platform Development, and a lot more. ',
  },
  {
    id: '02',
    images: AngularImg,
    title: 'Angular',
    // title: "My AlgoSoft",
    description:
      'My AlgoSoft is a leading Angular development company to develop high-performing solutions. We offer custom applications, web applications, enterprise applications, eCommerce portal development, UI/UX development, AJAX development, and the list goes on.',
  },
  {
    id: '03',
    images: FlutterImg,
    title: 'Flutter',
    description:
      "We excel in crafting customized Flutter applications tailored to your unique project requirements. Whether you need Flutter MVP Development, Flutter UI Development, Cross-Platform Flutter App Development, or more, we've got you covered.",
  },
  {
    id: '04',
    images: MicrosftDotnetImg,
    title: 'ASP.NET MVC/Razor Pages',
    description:
      'Our expertise lies in delivering top-notch solutions, be it ASP.NET MVC development, Razor Pages customization, or seamless integration of these technologies into your projects.',
  },
  {
    id: '05',
    images: PaythonImg,
    title: 'Python',
    description:
      'You need an engineering partner who can help you achieve the technological transformation you aim for without any do-overs. Your customers deserve a consistent, quality, and addictive experience, and so do you.',
  },
  {
    id: '06',
    images: FlaskImg,
    title: 'Flask API',
    description:
      'Looking for Flask API development? Your search ends here. We specialize in building robust and scalable Flask APIs that cater to your specific needs. Trust us for Flask API customization, optimization, and seamless integration into your applications.',
  },
  {
    id: '07',
    images: FlaskImg,
    title: 'Flask Admin',
    description:
      'For Flask Admin solutions, count on us to provide comprehensive development services. We are committed to delivering user-friendly Flask Admin interfaces, ensuring smooth administration and management of your applications.',
  },
  {
    id: '08',
    images: AzureImg,
    title: 'Azure SQL database',
    description:
      'Explore the power of Azure SQL Database with our expert development services. We help you leverage the full potential of Azure SQL, offering seamless integration, optimization, and customization based on your project requirements.',
  },
  {
    id: '09',
    images: RedisImg,
    title: 'Azure cache for Redis',
    description:
      "Optimize your application's performance with Azure Cache for Redis. As your development partner, we ensure smooth integration and utilization of Azure Cache for Redis, enhancing the speed and efficiency of your applications.",
  },
  {
    id: '10',
    images: MicrosftDotnetImg,
    title: '.NET Core API',
    description:
      'Unlock the potential of .NET Core API with our specialized development services. We are your trusted partner for crafting scalable and secure APIs using .NET Core, meeting the demands of modern application development.',
  },
  {
    id: '11',
    images: CloudImg,
    title: 'Cloud Computing',
    description:
      "Embrace the future with our cloud computing solutions. Whether you're venturing into AWS, Azure, or Google Cloud, we provide expertise in cloud computing to ensure seamless scalability, security, and performance for your applications.",
  },
  {
    id: '12',
    images: AzureAndGCP,
    title: 'Azure and GCP Cloud',
    description:
      "My ERP project utilizes the dynamic features of Azure and GCP Cloud platforms, fostering a scalable and secure environment. Leveraging Azure's robust services and GCP's advanced capabilities, it ensures optimal performance, innovation, and streamlined business operations.",
  },
  {
    id: '12',
    images: NetCore,
    title: 'Net core',
    description:
      "My ERP project utilizes the dynamic features of Azure and GCP Cloud platforms, fostering a scalable and secure environment. Leveraging Azure's robust services and GCP's advanced capabilities, it ensures optimal performance, innovation, and streamlined business operations.",
  },
  {
    id: '12',
    images: Postgres,
    title: 'PostgresSQL',
    description:
      "Strategically blending database solutions, my project integrates PostgreSQL, SQL Server, and Oracle. This approach harmonizes robust data management, scalability, and compatibility, catering to diverse enterprise requirements with a comprehensive and versatile database infrastructure.",
  },
];

export const ServicesInfo = [
  {
    icon: MobileAppIcon,
    img: Service1,
    link: '/product-and-web-development',
    title: 'Product and Web Development',
    description:
      'We create scalable and responsive websites with modern designs.',
  },
  {
    icon: MobileAppIcon,
    img: Service2,
    link: '/mobile-app-development',
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile apps with engaging designs and seamless user experiences.',
  },
  {
    icon: CloudIcon,
    img: Service3,
    link: '/cloud-platforms',
    title: 'Cloud Platforms',
    description:
      'We provide cloud platform solutions for AWS, Azure, and GCP that are reliable, scalable and secure.',
  },
  {
    icon: EcommerceIcon,
    img: Service4,
    link: '/e-commerce-websites',
    title: 'E-commerce Websites',
    description:
      'We design and develop e-commerce websites with secure payment gateway integrations and user-friendly interfaces.',
  },
  {
    icon: CustomIcon,
    img: Service5,
    link: '/custom-software-solutions',
    title: 'Custom Software Solutions',
    description:
      'We provide custom software solutions for various industries with scalable architecture and efficient workflows.',
  },
  {
    icon: ApplicationsIcon,
    img: Service6,
    link: '/web-applications',
    title: 'Web Applications',
    description:
      'We create web applications with scalable architecture and engaging designs that deliver seamless user experiences.',
  },
  {
    icon: LearningIcon,
    img: Service7,
    link: '/healthcare-apps',
    title: 'Healthcare Apps',
    description:
      'We design and develop healthcare apps that deliver seamless user experiences and secure data management.',
  },
  {
    icon: LearningIcon,
    img: Service8,
    link: '/al-and-machine-learning-applications',
    title: 'AI and Machine Learning Apps',
    description:
      'We design and develop AI and machine learning applications that leverage the latest technologies to deliver exceptional results.',
  },
  {
    icon: LearningIcon,
    img: Service9,
    link: '/erp-applications',
    title: 'ERP For Healthcare',
    description:
      'Healthcare ERP integrates inventory and invoice management, enhancing efficiency and organization in healthcare administration.',
  },
  {
    icon: LearningIcon,
    img: Service10,
    link: '/patient-applications',
    title: 'Website and Apps For Patients',
    description:
      'Seamless website and application for patients, providing easy access to medical information and appointment scheduling for enhanced healthcare experience.',
  },
  {
    icon: LearningIcon,
    img: Service11,
    link: '/doctor-application',
    title: 'Website and Apps For Doctors',
    description:
      'Comprehensive website and application tailored for doctors, facilitating efficient patient management, appointment scheduling, and seamless communication for enhanced medical practice.',
  },
  {
    icon: LearningIcon,
    img: Service12,
    link: '/clinic-applications',
    title: 'Clinical Trial System',
    description:
      'Advanced clinical trial system streamlining protocol management, patient recruitment, data collection, and analysis for efficient and reliable research outcomes.',
  },
  {
    icon: LearningIcon,
    img: Service13,
    link: '/outsources-Dedicated-Software-Team',
    title: 'Outsources Dedicated Software Team',
    description:
      "Experience top-tier expertise with our outsourced dedicated software team, delivering tailored solutions and innovative development services for your project's success.",
  },
  {
    icon: LearningIcon,
    img: Service14,
    link: '/outsources-Project-And-Product-Development',
    title: 'Outsources Project And Product Development',
    description:
      'Explore our outsourcing expertise: Tailored solutions for project development and comprehensive services spanning ideation to deployment for product development excellence.',
  },
];

export const ComparePlansInfo = [
  {
    title: 'Inventory management and tracking',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Billing – Bill/Invoice, Tax and smooth quick billing',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Analytics Report',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Centralize user / feature management',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Subscription model and cost effective',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Always available features and centralized database',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Cloud based scalable product',
    stapeOne: true,
    stapeTwo: true,
  },
  {
    title: 'Unlimited Usage and Advanced features of scanning the document',
    stapeOne: false,
    stapeTwo: true,
  },
];

export const FAQPage = [
  {
    title: 'Free Trial?',
    content:
      '<p>If you register for a free trial of one or more Services, MyAgloSoft will make the applicable Services available to you on a trial basis free of charge until the earlier of </p><ul><li>The end of the free trial period of the applicable Services (unless terminated earlier by you)</li><li>The start date of the paid subscription period for the applicable Services, </li><li>Termination by MyAgloSoft in its sole discretion. Any data that you enter into the Services, and any customizations made to the Services during the free trial will be permanently lost unless you (i) purchase the corresponding paid subscription plan for the account, (ii) purchase applicable Service upgrades, or (iii) export such data before the end of the trial period. Notwithstanding anything contained in this Section, Services are offered as-is during the free trial, without any warranty, covenant, support or liability whatsoever, to the extent permitted by law.</li></ul>',
  },
  {
    title: 'User Sign up Obligations?',
    content:
      "<p>You need to sign up for a user account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for corporate internal use, we recommend that you, and all other users from your organization, sign up for user accounts by providing your corporate contact information. </p><p>In particular, we recommend that you use your corporate email address. You agree to: </p><ul> <li>Users are required to provide accurate information during the sign-up process.</li><li>Users must also keep this information up to date and current.</li><li>If a user provides information that is untrue, inaccurate, outdated, or incomplete, or if the company has reasonable grounds to suspect this, they have the right to: a. Terminate the user's account. b. Refuse the user's current or future use of any or all of their services.</li></ul>",
  },
  {
    title: 'Restrictions on Use?',
    content:
      '<p>In addition to all other terms and conditions of this Agreement, you shall not: </p> <ul><li>transfer the Services or otherwise make it available to any third party</li><li>provide any service based on the Services without prior written permission.</li><li>allow user licenses to be shared or used by more than one individual other than by way of reassigning the user license to a new user</li><li>except as permitted under applicable law, attempt to disassemble, reverse engineer or decompile the Services</li><li>use the third party links to sites without agreeing to their website terms & conditions</li><li>post links to third party sites or use their logo, company name, etc. without their prior written permission</li><li>attempt to gain unauthorized access to the Services or its related systems or network</li><li>use the Services in any manner that could damage, disable, overburden, impair or harm any server, network, computer system, resource of MyAgloSoft.</li><li>use the Services to send or store material containing software viruses, worms or other harmful computer codes, files, scripts or programs</li> <li>use the Services in any manner that interferes with or disrupts the integrity, security or performance of the Services, its components and the data contained therein; host, display, upload, modify, publish, transmit, store, update or share any information that belongs to another person or entity and to which you do not have any right, including personal or confidential information of any person or entity with respect to which you do not have consent or permission from such person or entity</li><li>violate any applicable local, state, national or international law</li><li>use the Services for any form of competitive or benchmarking purposes.</li><li>remove or obscure any proprietary or other notices contained in the Services</li><li>use our Services in any manner that threatens the unity, integrity, defense, security or sovereignty of India, friendly relations of India with other countries, or public order, or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting other countries.</li> <li>create a false identity to mislead any person as to the identity or origin of any communication.</li><li>use the services for transmitting information that is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.</li><li>use the services in a manner that relates to or encourages any activity prohibited by law in India.</li></ul>',
  },
];

export const TestimonialsInfo = [
  {
    images: Testimonial1,
    name: 'Jane Doe',
    // dissertation: "-Head Of Idea",
    content:
      'I had an amazing experience working with this company. They really understood my needs and delivered a high-quality product on time.',
  },
  {
    images: Testimonial2,
    name: 'John Smith',
    // dissertation: "-Head Of Idea",
    content:
      'I highly recommend this company for anyone looking for top-notch web development services. They are knowledgeable, responsive, and a pleasure to work with.',
  },
  {
    images: Testimonial3,
    name: 'Samantha Johnson',
    // dissertation: "-Head Of Idea",
    content:
      'The team at this company is highly skilled and professional. They were able to solve a complex technical problem for us and exceeded our expectations.',
  },
];

export const BlogInfo = [
  {
    img: BlogImg2,
    title: 'Internet of Things (IoT) Effects on Software Applications',
    url: '/internet-of-things',
    sortContent:
      'A groundbreaking idea known as the Internet of Things (IoT) allows common objects and equipment to be...',
  },
  {
    img: BlogImg1,
    title:
      'Natural Language Processing (NLP) in Database Querying and Text Analytics',
    url: '/natural-language-processing',
    sortContent:
      'We produce tremendous amounts of data every second in the digital age, with unstructured text data accounting...',
  },
  {
    img: BlogImg3,
    title: 'OCR Introduction',
    url: '/ocr_introduction',
    sortContent:
      'We produce tremendous amounts of data every second in the digital age, with unstructured text data accounting...',
  },
];

export const BlogInfoSlider = [
  {
    img: BlogImg2,
    title: 'Internet of Things (IoT) Effects on Software Applications',
    url: '/internet-of-things',
    sortContent:
      'A groundbreaking idea known as the Internet of Things (IoT) allows common objects and equipment to be...',
  },
  {
    img: BlogImg1,
    title:
      'Natural Language Processing (NLP) in Database Querying and Text Analytics',
    url: '/natural-language-processing',
    sortContent:
      'We produce tremendous amounts of data every second in the digital age, with unstructured text data accounting...',
  },
  {
    img: BlogImg2,
    title: 'Internet of Things (IoT) Effects on Software Applications',
    url: '/internet-of-things',
    sortContent:
      'A groundbreaking idea known as the Internet of Things (IoT) allows common objects and equipment to be...',
  },
  {
    img: BlogImg1,
    title:
      'Natural Language Processing (NLP) in Database Querying and Text Analytics',
    url: '/natural-language-processing',
    sortContent:
      'We produce tremendous amounts of data every second in the digital age, with unstructured text data accounting...',
  },
];
