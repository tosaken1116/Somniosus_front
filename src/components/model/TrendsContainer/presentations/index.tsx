import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { BiSearch } from 'react-icons/bi';

import { useTrendsContainer } from '../hooks';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';

export const TrendsContainerPresentation: React.FC = () => {
  const { trends, recommendAccount } = useTrendsContainer();
  return (
    <div className="flex h-screen w-full flex-col gap-4">
      <Input
        placeholder="検索"
        className="rounded-full text-white"
        startIcon={<BiSearch size={24} className="text-3xl text-white-hover" />}
      />
      <div className="flex flex-col gap-2 rounded-md bg-white-hover px-7 py-5">
        <Typography className="text-2xl " variant="strong">
          プレミアムにサブスクライブ
        </Typography>
        <Typography className="text-lg" variant="strong">
          サブスクライブして新機能を利用しましょう。資格を満たしている場合、広告収益配分を受け取れます。
        </Typography>
        <div>
          <Button className="rounded-full px-5 py-4 text-lg font-bold">
            購入する
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2  rounded-md  bg-white-hover pt-5">
        <Typography className="px-7 text-2xl" variant="strong">
          いまどうしてる？
        </Typography>
        {trends.map(({ tag, name, tweet_count }) => (
          <Button
            variant="destructive"
            className="h-20 w-full justify-start rounded-none text-start hover:bg-white-hover"
            key={tag}
          >
            <div className="flex flex-col justify-start">
              <Typography className="text-lg text-gray-500" variant="body2">
                {tag}
              </Typography>
              <Typography variant="strong" className="text-xl">
                {name}
              </Typography>
              <Typography className="text-lg text-gray-500">
                {tweet_count}tweets
              </Typography>
            </div>
          </Button>
        ))}
        <Button
          className="h-12 w-full justify-start rounded-none rounded-b-md py-2 text-lg text-primary hover:bg-white-hover"
          variant="destructive"
        >
          さらに表示
        </Button>
      </div>
      <div className="flex flex-col gap-2 rounded-md  bg-white-hover pt-5">
        <Typography className="px-7 text-2xl" variant="strong">
          おすすめユーザー
        </Typography>
        {recommendAccount.map(({ id, image_url, name }) => (
          <Button
            key={id}
            className="flex w-full gap-3 self-start rounded-none bg-transparent py-9 text-lg hover:bg-white-hover"
            startIcon={
              <Avatar>
                <AvatarImage
                  src={image_url}
                  className="h-12 w-12 overflow-hidden rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            }
          >
            <div className="flex-1 text-start">
              <Typography variant="strong" className="flex-1">
                {name}
              </Typography>
              <Typography className=" text-gray-500">@{id}</Typography>
            </div>
            <div className="rounded-full bg-white px-6 font-bold text-black">
              フォロー
            </div>
          </Button>
        ))}
        <Button
          className="h-12 w-full justify-start rounded-none rounded-b-md text-lg text-primary hover:bg-white-hover"
          variant="destructive"
        >
          さらに表示
        </Button>
      </div>
    </div>
  );
};
