import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import {
  About,
  Hero,
  HomepageMeta,
  Social,
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
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/allen01beckwith/'},
  // Add or update social links as needed
];
