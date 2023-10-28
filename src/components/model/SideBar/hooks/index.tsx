import { type ReactNode } from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { HiMail, HiOutlineMail, HiOutlineUsers, HiUsers } from 'react-icons/hi';
import {
  IoBookmark,
  IoNotifications,
  IoNotificationsOutline,
} from 'react-icons/io5';
import { LuBookmark } from 'react-icons/lu';
import { RiFileListFill, RiFileListLine } from 'react-icons/ri';

import type { Account } from '@/api/@types';

import { YIcon } from '@/components/icons/Y';

type SideBarButton = {
  href?: string;
  label?: string;
  selectedIcon?: ReactNode;
  defaultIcon: ReactNode;
  handleClick?: () => void;
};

type IUseSideBar = {
  SideBarButtons: SideBarButton[];
  path: string;
  account: Account;
};

export const useSideBar = (): IUseSideBar => {
  // const path = usePathname();
  const path = '/home';
  const account: Account = {
    id: '@example',
    image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
    name: 'example',
    description: 'description',
    birth_day: '2022-01-01',
    role: 1,
    is_following: false,
    follow_count: 120,
    follower_count: 40000,
    website_url: 'https://example.com',
  };

  const SideBarButtons = [
    {
      href: '/home',
      label: 'ホーム',
      selectedIcon: <GoHomeFill size={36} className=" h-7 w-7" />,
      defaultIcon: <GoHome size={36} className=" h-7 w-7" />,
    },
    {
      href: '/search',
      label: '話題を検索',
      selectedIcon: <FaSearch size={36} className=" h-7 w-7" />,
      defaultIcon: <FiSearch size={36} className=" h-7 w-7" />,
    },
    {
      href: '/notifications',
      label: '通知',
      selectedIcon: <IoNotifications size={36} className=" h-7 w-7" />,
      defaultIcon: <IoNotificationsOutline size={36} className=" h-7 w-7" />,
    },
    {
      href: '/messages',
      label: 'メッセージ',
      selectedIcon: <HiMail size={36} className=" h-7 w-7" />,
      defaultIcon: <HiOutlineMail size={36} className=" h-7 w-7" />,
    },
    {
      href: `${account.name}/lists`,
      label: 'リスト',
      selectedIcon: <RiFileListFill size={36} className=" h-7 w-7" />,
      defaultIcon: <RiFileListLine size={36} className=" h-7 w-7" />,
    },
    {
      href: `/i/bookmarks`,
      label: 'ブックマーク',
      selectedIcon: <IoBookmark size={36} className=" h-7 w-7" />,
      defaultIcon: <LuBookmark size={36} className=" h-7 w-7" />,
    },
    {
      href: `${account.name}/communities`,
      label: 'コミュニティ',
      selectedIcon: <HiUsers size={36} className=" h-7 w-7" />,
      defaultIcon: <HiOutlineUsers size={36} className=" h-7 w-7" />,
    },
    {
      handleClick: (): void => {},
      label: 'プレミアム',
      selectedIcon: <YIcon size={36} className=" h-7 w-7 text-white" />,
      defaultIcon: <YIcon size={36} className=" h-7 w-7 text-white" />,
    },
    {
      href: `/${account.id}`,
      label: 'プロフィール',
      selectedIcon: <BiSolidUser size={36} className=" h-7 w-7" />,
      defaultIcon: <AiOutlineUser size={36} className=" h-7 w-7" />,
    },
  ];
  return {
    SideBarButtons,
    path,
    account,
  };
};
