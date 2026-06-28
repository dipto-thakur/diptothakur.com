import {
    FiGithub, FiLinkedin, FiX, FiMail, FiGlobe, FiRss,
  } from 'react-icons/fi';
  import {
    FaDev, FaMedium, FaDiscord, FaYoutube,
    FaInstagram, FaFacebook, FaReddit, FaCodepen, FaStackOverflow,
  } from 'react-icons/fa';
  import {
    SiHashnode, SiLeetcode, SiCodeforces, SiBluesky, SiThreads,
  } from 'react-icons/si';
  import type { IconType } from 'react-icons';
  
  const socialIcons = {
    github:        FiGithub,
    linkedin:      FiLinkedin,
    twitter:       FiX,
    mail:          FiMail,
    globe:         FiGlobe,
    rss:           FiRss,
    devto:         FaDev,
    hashnode:      SiHashnode,
    medium:        FaMedium,
    codepen:       FaCodepen,
    stackoverflow: FaStackOverflow,
    leetcode:      SiLeetcode,
    codeforces:    SiCodeforces,
    discord:       FaDiscord,
    youtube:       FaYoutube,
    instagram:     FaInstagram,
    facebook:      FaFacebook,
    threads:       SiThreads,
    bluesky:       SiBluesky,
    reddit:        FaReddit,
  } as const;
  
  type SocialKey = keyof typeof socialIcons;
  
  export const getSocialIcon = (key: string): IconType =>
    socialIcons[key as SocialKey] ?? FiGlobe;