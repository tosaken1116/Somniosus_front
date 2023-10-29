'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';

import { PostTweet } from '@/components/model/PostTweet';
import { SideBar } from '@/components/model/SideBar';
import { TrendsContainer } from '@/components/model/TrendsContainer';
import { Tweets } from '@/components/model/Tweets';
import { Separator } from '@/components/ui/Separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';

export const Screen: React.FC = () => (
  <div className="flex">
    <div className="flex w-1/4 justify-end">
      <SideBar />
      <Separator orientation="vertical" className="w-[2px] bg-white-hover" />
    </div>
    <div className="relative max-w-3xl flex-1 overflow-scroll">
      <div className=" absolute w-full">
        <Tabs defaultValue="recommend" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger
              value="recommend"
              className=" w-1/2 items-center py-6 text-xl"
            >
              おすすめ
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className=" w-1/2 items-center py-6 text-xl"
            >
              フォロー中
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Separator
          className="mt-4 h-[2px] bg-white-hover"
          orientation="horizontal"
        />
      </div>

      <ScrollArea className="mt-16 h-screen">
        <PostTweet />
        <Separator
          className="h-[2px] bg-white-hover"
          orientation="horizontal"
        />
        <Tweets />
      </ScrollArea>
    </div>
    <div className="flex w-1/4 flex-row">
      <Separator orientation="vertical" className="w-[2px] bg-white-hover" />
      <div className="w-full px-6 pt-1">
        <TrendsContainer />
      </div>
    </div>
  </div>
);
