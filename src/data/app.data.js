import { AiOutlineLineChart, AiOutlineHome } from 'react-icons/ai';
import { MdVideoLabel } from 'react-icons/md';
import { BiTennisBall } from 'react-icons/bi';
import {
  BsBoxArrowInUpRight,
  BsLaptop,
  BsCodeSlash,
  BsSun,
} from 'react-icons/bs';
import { SiReasonstudios } from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaRegMoon } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GiConsoleController } from 'react-icons/gi';
import { CiUser } from 'react-icons/ci';
import { BsChatRight } from 'react-icons/bs';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaCheckCircle, FaRegWindowClose } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

export const nestedList = [
  { id: 4, text: 'Best Communities' },
  { id: 5, text: 'Communities' },
  { id: 7, text: 'Careers' },
  { id: 8, text: 'Press' },
];

export const gamingList = [
  { id: 1, text: 'Valorant' },
  { id: 2, text: 'Minecraft' },
  { id: 3, text: 'Call Of Duty' },
];

export const sportsList = [
  { id: 1, text: 'T20 Cricket' },
  { id: 2, text: 'NBA' },
  { id: 3, text: 'IPL' },
];

export const businessList = [
  { id: 1, text: 'Stocks' },
  { id: 2, text: 'Crypto' },
  { id: 3, text: 'IPOs' },
];

export const televisonList = [
  { id: 1, text: 'Suits' },
  { id: 2, text: 'Friends' },
  { id: 3, text: 'Breaking Bad' },
];

export const celebrityList = [
  { id: 1, text: 'Mujeer' },
];

export const sideListItems = [
  { id: 1, subdivision: true, text: 'Feeds' },
  { id: 2, text: 'Home', icon: <AiOutlineHome size={24} /> },
  { id: 3, text: 'Subscriptions', icon: <BsBoxArrowInUpRight size={24} /> },
  { id: 8, subdivision: true, text: 'Browse by topics' },
  {
    id: 9,
    nested: true,
    data: gamingList,
    icon: <GiConsoleController size={24} />,
    text: 'Gaming',
  },
  {
    id: 10,
    nested: true,
    data: sportsList,
    icon: <BiTennisBall size={24} />,
    text: 'Sports',
  },
  {
    id: 11,
    nested: true,
    data: businessList,
    icon: <AiOutlineLineChart size={24} />,
    text: 'Business',
  },
  {
    id: 13,
    nested: true,
    data: televisonList,
    icon: <MdVideoLabel size={24} />,
    text: 'Television',
  },
  {
    id: 14,
    nested: true,
    data: celebrityList,
    icon: <CiUser size={24} />,
    text: 'Celebrity',
  },
];

export const userProfileItems = [
  {
    id: 1,
    text: 'Dark Mode',
    text2: 'Light Mode',
    icon: <FaRegMoon size={24} />,
    isDarkMode: true,
    icon2: <BsSun size={24} />,
  },
  { id: 2, text: 'Help Center', icon: <AiOutlineQuestionCircle size={24} /> },
  {
    id: 3,
    nested: true,
    data: nestedList,
    icon: <IoMdInformationCircleOutline size={24} />,
    text: 'More',
  },
  { id: 4, divider: true },
  { id: 5, text: 'Login / Sign Up', icon: <SiReasonstudios size={24} /> },
];

export const imageCardsItems = [
  {
    id: 1,
    header: 'Hackathon in Bangalore',
    subHeader: 'LeagueX hosts its first hackathon this Saturday...',
    imageUrl: 'https://media.licdn.com/dms/image/C5612AQGt47bdVf39mg/article-cover_image-shrink_600_2000/0/1520208836398?e=2147483647&v=beta&t=OVNwcmbisIeQBfoJQm3dKJmrqnBBwqItO2j_EXW4-FI',
    user: 's/Vasant Nagar',
    icon: <CiUser size={18} />,
  },
  {
    id: 2,
    header: 'New Ola electric chaging points',
    subHeader: 'Ola added 20+ charging points in Indiranagar..',
    imageUrl: 'https://www.motorbeam.com/wp-content/uploads/Ola-Hypercharger.jpg',
    user: 's/Indiranagar',
    icon: <CiUser size={18} />,
  },
  {
    id: 3,
    header: 'Traffic Jam',
    subHeader: 'Heavy rainfall in Baglur caused traffic jam to airport...',
    imageUrl: 'https://static.tnn.in/thumb/msid-104015237,thumbsize-191356,width-1280,height-720,resizemode-75/104015237.jpg',
    user: 's/Bagalur',
    icon: <CiUser size={18} />,
  },
  {
    id: 4,
    header: 'Pets missing?',
    subHeader: '4th report of stolen pets in the same week...',
    imageUrl: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/12/550914cc16bd6-ghk-lost-pet-xl.jpg?resize=980:*',
    user: 's/Yelahanka',
    icon: <CiUser size={18} />,
  },
];

export const cardContentItems = [
  {
    id: 1,
    likes: '24.4k',
    icon: <CiUser />,
    user: 's/Hennur',
    postedBy: 'u/Arjun Reddy',
    timeAgo: '19 hours ago',
    desc: 'Garbage mountain in Hennur',
    image: 'https://static.toiimg.com/thumb/msid-76021130,imgsize-5094550,width-400,resizemode-4/76021130.jpg',
    comments: '768',
    UploadStatus: 'Fact & Attachment verfied',
    status: <FaCheckCircle />,
  },
  {
    id: 3,
    likes: '899',
    icon: <CiUser />,
    user: 's/Bagmane Tech Park',
    postedBy: 'u/Sharique',
    timeAgo: '7 hours ago',
    desc: 'Amazon laid off 243 employees in Bangalore ',
    comments: '100',
    image: 'https://images.jdmagicbox.com/comp/bangalore/t1/080pxx80.xx80.181113143230.j1t1/catalogue/amazon-development-center-bangalore-corporate-companies-srsernfy31.jpg',
    UploadStatus: 'Fact & Attachment not verfied',
    status: <FaRegWindowClose />,
  },
];

export const popularCommunityItems = [
  {
    id: 1,
    header: 'Popular Spaces',
    content: [
      'Indiranagar',
      'Koramangala',
      'Malleshwaram',
      'Frazer Town',
      'Jayanagar',
      'Kammanahalli',
      'Bellandur',
      'Whitefield',
      'BTM Layout',
      'Ulsoor',
      'Rajaji Nagar',
      'Electronic City'
    ],
  },
  {
    id: 2,
    header: 'Popular Searches',
    content: [
      'Layoffs',
      'Karnataka Election Results',
      'Budget 2024',
      'Chandrayaan-3'
    ],
  },
];

export const cardFooterItems = [
  { id: 1, icon: <BsChatRight size={18} />, comments: true, text: 'Comments' },
  { id: 2, icon: <FaRegArrowAltCircleUp />, text: 'Upvote' },
  { id: 3, icon: <FaRegArrowAltCircleDown />, text: 'Downvote' },
];
