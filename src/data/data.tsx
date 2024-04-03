import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from './dataDef';
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
} as const;
export type SectionId = (typeof SectionId)[keyof typeof SectionId];
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Allen Beckwith`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Network Engineer @ AT&T
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        B.S. Electrical Engineering, Northwestern University
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Dallas, TX', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Interests', text: 'Piano, Clarinet, Running', Icon: SparklesIcon},
    {label: 'Study', text: 'Northwestern University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'AT&T Inc.', Icon: BuildingOffice2Icon},
  ],
};
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/allen01beckwith/'},
];
