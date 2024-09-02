import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BsPlugin } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import image1 from './assets/smartmockups_realestate.png';
import image2 from './assets/smartmockups_geschenke.png';
import image3 from './assets/smartmockups_marthaberra.png';
import image4 from './assets/smartmockups_laravel.png';
import image5 from './assets/smartmockups_educationalwebsute.png';
import image6 from './assets/weatherapp.png';
import image7 from './assets/smartmockups_cardealer.png';

export const portfolio = [
   {
     id: 1,
     title: 'Responsive RealEstate Website',
     image: image1,
     website_url:'https://marsh-realestate.vercel.app/',
     github_url:'https://github.com/Tobbie123github/estate',
     github_icon: <FaGithub/>,
     technologies: [
       <FaReact style={{color:'#61dafb'}}  key="react" />,
       <SiTailwindcss style={{color:'#38b2ac'}}  key="tailwindcss3" />,
       <IoLogoFirebase style={{color:'#ffc107'}}  key="firebase" />,
       <FaGit style={{color:'#f05033'}}  key="git" />,
     ],
     link_icon: <FaLink/>,
     description: 'Discover your ideal property with our Responsive Real Estate Website. Tailored for both mobile and desktop, it offers a sleek, user-friendly interface, advanced search options, and comprehensive property listings, making home hunting easy and efficient. Whether you\'re buying, selling, or renting, our platform adapts to your needs, providing a seamless experience across all devices.'
     
   },
   {
     id: 2,
     title: 'Showcase of Amazon Affiliate Integration Project',
     image: image2,
     website_url:'https://geschenke-scout.de/',
     github_url:'',
     // github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Welcome to my portfolio showcase of a custom WordPress website seamlessly integrated with Amazon\'s API. This project highlights my skills in developing dynamic affiliate sites, featuring real-time Amazon product listings directly on the site. The platform offers a user-friendly interface with up-to-date product information, comprehensive reviews, and exclusive deals, all curated to enhance the shopping experience. This project demonstrates my ability to create functional and visually appealing affiliate websites, with a focus on providing valuable content and seamless user interaction.',
     technologies: [
       <FaWordpress style={{color:'#21759b'}} key="wordpress" />,
       <FaPhp style={{color:'#4f5b93'}} key="php" />,
       <BsPlugin style={{color:'#f7dc6f'}}  key='plugin'/>,
       <TbApi style={{color:'orange'}}  key='api'/>,
       <FaAmazon  style={{color:'#ff9900'}}  key='Amazon'/>,
       <AiOutlineRobot style={{color:'#03a9f4'}} key='ai' />
     ],
   },
   {
     id: 3,
     title: 'Dynamic Real Estate Listings with Paragon API Integration',
     image:image3,
     website_url:'https://www.tobi.com',
     github_url:'',
     // github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Explore my WordPress portfolio project that integrates the Paragon API to deliver up-to-date real estate listings. This custom website offers a sophisticated and user-friendly interface, showcasing property details, high-quality images, and comprehensive search functionalities. By leveraging the Paragon API, the site provides accurate and current MLS listings, allowing users to browse available properties with ease. This project demonstrates my expertise in creating tailored real estate solutions, combining seamless API integration with a responsive design to enhance user experience and streamline property searches.',
     technologies: [
       <FaWordpress style={{color:'#21759b'}} key="wordpress" />,
       <FaPhp style={{color:'#4f5b93'}} key="php" />,
       <BsPlugin style={{color:'#f7dc6f'}} key='plugin'/>,
       <TbApi style={{color:'orange'}} key='api' />
     ],
   },
   {
     id: 4,
     title: 'Advanced Job Posting and Search Platform with Laravel',
     image:image4,
     website_url:'https://acaulescent-canyons.000webhostapp.com/',
     github_url:'https://github.com/Tobbie123github/JobWebsite',
     github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Explore my Laravel PHP project designed to simplify job posting and search processes. This robust platform enables users to effortlessly post job listings, search for opportunities, and filter results based on various criteria. Built with Laravel’s powerful features, the site offers a secure and scalable solution for both job seekers and employers. The user-friendly interface includes advanced search functionalities, real-time updates, and responsive design, ensuring an efficient and engaging experience. This project highlights my ability to develop comprehensive job management systems using Laravel, tailored to meet modern employment needs',
     technologies: [
       <FaLaravel style={{color:'#ff2d20'}} key="laravel" />,
       <FaPhp style={{color:'#4f5b93'}} key="php" />,
       <SiTailwindcss style={{color:'#38b2ac'}} key="tailwindcss3" />,
       <SiMysql style={{color:'#00698f'}} key='mysql'/>,
       
     ],
   },
   {
     id: 5,
     title: 'Modern Responsive School Website ',
     image: image5,
     website_url:'https://edu-kohl.vercel.app/',
     github_url:'https://github.com/Tobbie123github/Educational-Website',
     github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Discover the school website I developed using HTML, CSS, and JavaScript, showcasing a modern and interactive design. This project features a clean, responsive layout tailored for optimal performance across all devices. The site includes dynamic elements such as event calendars, news updates, and an easy-to-navigate interface, all crafted with a focus on enhancing user experience. By leveraging the latest web technologies, I created a platform that not only looks great but also functions seamlessly, providing students, parents, and staff with essential information and a vibrant online presence.',
     technologies: [
       <FaHtml5 style={{color:'red'}} key='html' />,
       <FaCss3Alt style={{color:'blue'}} key='css'/>,
       <IoLogoJavascript style={{color:'yellow'}} key='javascript'/>
     ]
   },
   {
     id: 6,
     title: 'Interactive Weather App with OpenWeather API Integration',
     image: image6,
     website_url:'https://weather-app-two-zeta-20.vercel.app/',
     github_url:'https://github.com/Tobbie123github/weatherApp',
     github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Check out my Weather App project, powered by the OpenWeather API, which provides real-time weather updates and forecasts. This dynamic application offers users an intuitive interface to quickly access current conditions, hourly forecasts, and extended weather trends. Utilizing the OpenWeather API, the app delivers accurate and up-to-date weather information with ease. The responsive design ensures a smooth user experience across all devices, making it simple to stay informed about the weather wherever you are. This project highlights my skills in integrating APIs and creating user-friendly applications that provide valuable, real-time data.',
     technologies: [
       <FaReact style={{color:'#61dafb'}} key='react' />,
       <FaCss3Alt style={{color:'blue'}} key='css'/>,
       <TbApi style={{color:'orange'}} key='api'/>
     ]
   },
   {
     id: 7,
     title: 'Mobile-Optimized Car Dealer Website for Small Screens',
     image: image7,
     website_url:'https://car-dealer-website.vercel.app/',
     github_url:'https://github.com/Tobbie123github/carDealerWebsite',
     github_icon: <FaGithub />,
     link_icon: <FaLink />,
     description: 'Discover the car dealer website I designed with a focus on mobile-first responsiveness, optimized exclusively for small screens. Crafted with my smartphone using SPCK EDITOR, this site offers a streamlined and user-friendly interface that makes browsing  vehicles straightforward and efficient. Key features include an easy-to-navigate inventory, detailed car listings, all tailored for a seamless mobile experience. This project highlights my expertise in designing responsive websites that deliver a high-quality user experience on mobile devices, ensuring potential buyers have all the information they need at their fingertips.',
     technologies: [
       <FaHtml5 style={{color:'red'}} key='html' />,
       <FaCss3Alt style={{color:'blue'}} key='css'/>,
       <IoLogoJavascript style={{color:'yellow'}} key='javascript'/>
     ]
   }
  
   
 ];