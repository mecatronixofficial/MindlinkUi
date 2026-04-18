import { AiFillSchedule } from "react-icons/ai";
import {
  BiLogoGmail,
  BiSolidVideoRecording,
  BiTrendingUp,
} from "react-icons/bi";
import { BsLightningFill, BsStars } from "react-icons/bs";
import {
  FaBrain,
  FaGlobeAfrica,
  FaHandshake,
  FaHouseDamage,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaMedal,
  FaSmileBeam,
  FaThumbsUp,
  FaUsers,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { GiAirplaneDeparture, GiStairsGoal, GiStrong } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoMdChatboxes } from "react-icons/io";
import {
  IoCloseSharp,
  IoHeartSharp,
  IoInfiniteSharp,
  IoShuffleSharp,
} from "react-icons/io5";
import { MdLaptopMac } from "react-icons/md";
import {
  PiCertificateFill,
  PiMapPinAreaFill,
  PiPhoneFill,
} from "react-icons/pi";
import {
  RiAwardFill,
  RiMenu3Line,
  RiRobot2Fill,
  RiStarSFill,
} from "react-icons/ri";
import {
  TbArrowBadgeRight,
  TbClockHour4Filled,
  TbTargetArrow,
} from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const Icon_Helper = {
  arrow: {
    right: TbArrowBadgeRight,
    tradeup: BiTrendingUp,
  },
  nav: {
    close: IoCloseSharp,
    menu: RiMenu3Line,
  },
  hero: {
    robot: RiRobot2Fill,
    shield: FaUserShield,
    heart: IoHeartSharp,
    family: FaUsers,
    chatbox: IoMdChatboxes,
    target: TbTargetArrow,
    cap: HiAcademicCap,
    cup: HiMiniTrophy,
    handshake: FaHandshake,
    stars: BsStars,
    lightning: BsLightningFill,
    lap: MdLaptopMac,
    certificate: PiCertificateFill,
    Instructors: FaUserTie,
    medal: FaMedal,
    infinity: IoInfiniteSharp,
    flex: IoShuffleSharp,
    goal: GiStairsGoal,
    smile: FaSmileBeam,
    camera: BiSolidVideoRecording,
    Plane:GiAirplaneDeparture,
  },
  approch: {
    brain: FaBrain,
    strong: GiStrong,
    thumbsup: FaThumbsUp,
    Schedulecheck: AiFillSchedule,
    check:TiTick,
  },
  testimonial: {
    star: RiStarSFill,
    office:FaHouseDamage,
  },
  cource: {
    globe: FaGlobeAfrica,
    clock: TbClockHour4Filled,
    award: RiAwardFill,
  },
  contact: {
    map: PiMapPinAreaFill,
    phone: PiPhoneFill,
    mail: BiLogoGmail,
    link: FaLink,
    insta:FaInstagramSquare,
    linked:FaLinkedin,
    youtub: FaSquareYoutube,
    twiter: FaSquareXTwitter,
  },
};

export default Icon_Helper;
