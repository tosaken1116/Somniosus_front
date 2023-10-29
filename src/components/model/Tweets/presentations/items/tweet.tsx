import type { FC } from 'react';

import { Bookmark } from 'lucide-react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { IoBookmarkOutline } from 'react-icons/io5';

import { RetweetText } from './retweetText';

import type { TweetItem } from '@/api/@types';

import { FavoriteButton } from '@/components/model/FavoriteButton';
import { ImpressionButton } from '@/components/model/ImpressionButton';
import { MediaContainer } from '@/components/model/MediaContainer';
import { ReplyButton } from '@/components/model/ReplyButton';
import { RetweetButton } from '@/components/model/RetweetButton';
import { AvatarImage, Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { DateDiffLabel } from '@/components/ui/DateDiffLabel';
import { Typography } from '@/components/ui/Typography';

export type Tweet = TweetItem & {
  retweet_content: Tweet | null;
};

type Props = {
  tweet: Tweet;
  isRetweetContent?: boolean;
};

export const Item: FC<Props> = ({
  tweet: {
    id,
    account,
    image_url_list,
    impression_count,
    reply_count,
    retweet_count,
    favorite_count,
    is_bookmark,
    is_favorite,
    is_retweet,
    content,
    created_at,
    retweet_content,
  },
  isRetweetContent,
}) => {
  if (retweet_content != null && content == '' && image_url_list.length == 0) {
    return (
      <div>
        <RetweetText userName={account.name} />
        <Item tweet={retweet_content} />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-row gap-4 text-xl">
      <div className="flex w-full flex-row gap-4 text-xl">
        {!isRetweetContent && (
          <Avatar className="h-12 w-12">
            <AvatarImage src={account.image_url} alt={account.name} />
          </Avatar>
        )}
        <div className="w-full">
          <div>
            <div className="flex flex-row gap-1">
              {isRetweetContent && (
                <Avatar className="h-7 w-7">
                  <AvatarImage src={account.image_url} alt={account.name} />
                </Avatar>
              )}
              <Typography variant="strong" className="text-xl">
                {account.name}
              </Typography>
              <Typography className="flex-1 text-xl text-gray-500">
                @{account.id} ・
                <DateDiffLabel lang="ja" date={new Date(created_at)} />
              </Typography>
              {!isRetweetContent && (
                <Button variant="ghost" className=" text-gray-500">
                  <BiDotsHorizontalRounded size={24} />
                </Button>
              )}
            </div>
            <Typography className="pb-2">{content}</Typography>
            {image_url_list.length != 0 && (
              <MediaContainer medias={image_url_list} />
            )}
          </div>
          {retweet_content && (
            <div className=" my-4 rounded-md border-2 border-white-hover p-4">
              <Item tweet={retweet_content} isRetweetContent />
            </div>
          )}
          {!isRetweetContent && (
            <div className="flex w-full justify-between">
              <ReplyButton id={id} reply_count={reply_count} />
              <RetweetButton
                id={id}
                is_retweet={is_retweet}
                retweet_count={retweet_count}
              />
              <FavoriteButton
                id={id}
                is_favorite={is_favorite}
                favorite_count={favorite_count}
              />
              <ImpressionButton impression_count={impression_count} />
              <div>
                <Button variant="ghost">
                  {is_bookmark ? (
                    <Bookmark size={20} />
                  ) : (
                    <IoBookmarkOutline size={20} />
                  )}
                </Button>
                <Button variant="ghost">
                  <FiShare size={20} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
