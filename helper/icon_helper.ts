import { BiLogoGmail } from "react-icons/bi";
import { FaGlobeAfrica, FaLink } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { PiMapPinAreaFill, PiPhoneFill } from "react-icons/pi";
import { RiAwardFill, RiMenu3Line, RiStarSFill } from "react-icons/ri";
import { TbArrowBadgeRight, TbClockHour4Filled } from "react-icons/tb";

const Icon_Helper = {
  arrow: {
    right: TbArrowBadgeRight,
  },
  contact: {
    map: PiMapPinAreaFill,
    phone: PiPhoneFill,
    mail: BiLogoGmail,
    link: FaLink,
  },
  nav: {
    close: IoCloseSharp,
    menu: RiMenu3Line,
  },
  testimonial: {
    star: RiStarSFill,
  },
  cource: {
    globe: FaGlobeAfrica,
    clock: TbClockHour4Filled,
    award: RiAwardFill,
  }
};

export default Icon_Helper;
