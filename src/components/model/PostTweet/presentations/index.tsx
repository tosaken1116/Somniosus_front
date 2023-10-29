'use client';

import { BsEmojiSmile, BsGeoAlt } from 'react-icons/bs';
import { MdOutlineGifBox } from 'react-icons/md';
import { RiListRadio } from 'react-icons/ri';
import { TbCalendarTime } from 'react-icons/tb';

import { usePostTweet } from '../hooks';

import { CustomFileInput } from './item/ImageInput';

import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import { Textarea } from '@/components/ui/Textarea';

export const PostTweetPresentation: React.FC = () => {
  const {
    handleSelect,
    handleChange,
    account: { image_url },
    tweetAble,
  } = usePostTweet();

  return (
    <div className="flex flex-row gap-4 p-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={image_url} alt={`${image_url}のアイコン`} />
      </Avatar>
      <div className="w-full">
        <Textarea
          onChange={handleChange}
          className=" resize-none border-none bg-transparent text-2xl text-white  focus-visible:ring-0"
          placeholder="いまどうしてる？"
        />
        <Separator orientation="horizontal" className="bg-white-hover" />
        <div className="flex flex-row items-center pt-4">
          <div className="flex flex-1 flex-row gap-4">
            <form>
              <CustomFileInput onChange={handleSelect} />
            </form>
            <MdOutlineGifBox size={24} className="text-primary" />
            <RiListRadio size={24} className="text-primary" />
            <BsEmojiSmile size={24} className="text-primary" />
            <TbCalendarTime size={24} className="text-primary" />
            <BsGeoAlt size={24} className="text-primary/40" />
          </div>
          <Button disabled={!tweetAble} className="rounded-full font-bold">
            ツイートする
          </Button>
        </div>
      </div>
    </div>
  );
};
