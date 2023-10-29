'use client';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import { BiDotsHorizontalRounded, BiHelpCircle } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiFeather } from 'react-icons/gi';
import { PiDotsThreeCircle, PiGearLight } from 'react-icons/pi';
import { RiShareBoxLine } from 'react-icons/ri';
import { RxBarChart } from 'react-icons/rx';
import { TfiPencilAlt } from 'react-icons/tfi';

import { useSideBar } from '../hooks';

import { YIcon } from '@/components/icons/Y';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/Popover';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Separator } from '@/components/ui/Separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import { ADVERTISE_URL, ANALYTICS_URL, SUPPORT_URL } from '@/constants/urls';

export const SideBarPresentation: React.FC = () => {
  const {
    SideBarButtons,
    path,
    account: { id, image_url, name },
  } = useSideBar();
  return (
    <TooltipProvider>
      <header className="flex h-screen w-80 flex-col items-start">
        <ScrollArea className=" w-72 flex-1 px-2">
          <div className="flex h-full w-full flex-col items-start">
            <Button
              variant="destructive"
              size="icon"
              className="self-start rounded-full p-9 hover:bg-white-hover"
            >
              <span>
                <Link href="/home">
                  <YIcon size={36} />
                </Link>
              </span>
            </Button>
            {SideBarButtons.map(
              ({ href, label, defaultIcon, selectedIcon, handleClick }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleClick && ((): void => handleClick())}
                      variant="destructive"
                      className=" self-start rounded-full py-8 hover:bg-white-hover"
                    >
                      {href != undefined ? (
                        <Link
                          href={href}
                          className="flex flex-row items-center"
                        >
                          {path == href ? selectedIcon : defaultIcon}
                          <Typography
                            className="hidden px-6 text-[24px] md:block"
                            variant={href == path ? 'strong' : 'body1'}
                          >
                            {label}
                          </Typography>
                        </Link>
                      ) : (
                        <>
                          {path == href ? selectedIcon : defaultIcon}
                          <Typography className="hidden px-6 text-[24px]  md:block">
                            {label}
                          </Typography>
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={-96}
                    className="block border-none  p-1 md:hidden"
                  >
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              )
            )}

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="destructive"
                  className=" self-start rounded-full py-7 text-xl hover:bg-white-hover"
                >
                  <PiDotsThreeCircle size={36} className=" h-7 w-7" />
                  <Typography className="hidden px-6 text-[24px]  md:block">
                    もっと見る
                  </Typography>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                className="w-96"
                align="start"
                sticky="always"
                sideOffset={-290}
                avoidCollisions={false}
              >
                <div className="overflow-hidden rounded-sm bg-black shadow-around">
                  <Button
                    variant="destructive"
                    className="w-full justify-start rounded-none py-8 text-lg hover:bg-white-hover"
                  >
                    <FaRegMoneyBillAlt size={36} className=" h-7 w-7" />
                    <Typography className="px-6 text-xl">収益化</Typography>
                  </Button>
                  <Separator className="bg-white-hover" />
                  <div className="p-2 text-lg">
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="flex w-full flex-row p-4 text-start">
                          <Typography variant="strong" className="flex-1">
                            Creator Studio
                          </Typography>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <Link
                            href={ANALYTICS_URL}
                            className="flex flex-row gap-4"
                          >
                            <RxBarChart />
                            <Typography>アナリティクス</Typography>
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="flex w-full flex-row p-4 text-start">
                          <Typography variant="strong" className="flex-1">
                            プロフェッショナルツール
                          </Typography>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <Link
                            href={ADVERTISE_URL}
                            className="flex flex-row content-center gap-4 py-2"
                          >
                            <RiShareBoxLine size={24} />
                            <Typography>広告</Typography>
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="flex w-full flex-row p-4 text-start">
                          <Typography variant="strong" className="flex-1">
                            設定とサポート
                          </Typography>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <Link
                            href="/setting"
                            className="flex flex-row content-center gap-4 py-2"
                          >
                            <PiGearLight size={24} />
                            <Typography>設定とプライバシー</Typography>
                          </Link>
                          <Link
                            href={SUPPORT_URL}
                            className="flex flex-row content-center gap-4 py-2"
                          >
                            <BiHelpCircle size={24} />
                            <Typography>ヘルプセンター</Typography>
                          </Link>
                          <Link
                            href="/display"
                            className="flex flex-row content-center gap-4 py-2"
                          >
                            <TfiPencilAlt size={24} />
                            <Typography>表示</Typography>
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button className="mt-2 rounded-full py-8 md:w-full">
              <Typography
                variant="strong"
                className="mx-1 hidden text-xl md:block"
              >
                ツイートする
              </Typography>
              <GiFeather className="block md:hidden" size={32} />
            </Button>
          </div>
        </ScrollArea>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="flex w-full gap-3 self-start rounded-full bg-black-hover py-9 text-lg hover:bg-white-hover"
              startIcon={
                <Avatar className="h-12 w-12">
                  <AvatarImage src={image_url} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              }
            >
              <div className="flex-1 text-start">
                <Typography variant="strong" className="flex-1">
                  {name}
                </Typography>
                <Typography className=" text-gray-500">{id}</Typography>
              </div>
              <BiDotsHorizontalRounded size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="-m-2 w-80">
            <div className="rounded-sm bg-black shadow-around">
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="flex w-full gap-3 self-start bg-black-hover py-9 text-lg "
                  startIcon={
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={image_url} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  }
                >
                  <div className="flex-1 text-start">
                    <Typography variant="strong" className="flex-1">
                      {name}
                    </Typography>
                    <Typography className=" text-gray-500">{id}</Typography>
                  </div>
                  <BiDotsHorizontalRounded size={24} />
                </Button>
              </div>
              <span className="block h-[1px] w-full bg-white-hover" />
              <div className="p-2 font-bold">
                <Button variant="ghost">既存のアカウントを追加</Button>
                <Button variant="ghost">アカウントを管理</Button>
                <Button variant="ghost">{id}からログアウト</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </header>
    </TooltipProvider>
  );
};
