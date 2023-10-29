import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import { YIcon } from '@/components/icons/Y';
import { LoginButton } from '@/components/model/LoginButton';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import { Typography } from '@/components/ui/Typography';

export const Screen: React.FC = () => (
  <div className="flex flex-row">
    <div className="flex w-1/2 items-center justify-center self-center">
      <YIcon size={240} className="h-1/2 w-1/2" />
    </div>
    <div className="mt-16 flex w-1/2 flex-col gap-6 p-8">
      <div>
        <Typography className="text-[64px]" variant="strong">
          すべての話題が、ここに。
        </Typography>
      </div>
      <div>
        <Typography className="text-3xl" variant="strong">
          今すぐ参加しましょう。
        </Typography>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <Button className="w-72 rounded-full bg-white text-black hover:bg-gray-100">
            <FcGoogle size={20} />
            Googleで登録
          </Button>
          <Button className="w-72 rounded-full bg-white font-bold text-black hover:bg-gray-100">
            <BsApple size={20} />
            Appleのアカウントで登録
          </Button>
        </div>
        <div className="mx-2 flex h-10 w-28 flex-row items-center">
          <Separator orientation="horizontal" className=" bg-gray-400" />
          <Typography className=" whitespace-nowrap">または</Typography>
          <Separator orientation="horizontal" className=" bg-gray-400" />
        </div>
        <div>
          <Button className="w-72 rounded-full font-bold">
            アカウントを作成
          </Button>
        </div>
      </div>
      <LoginButton />
    </div>
  </div>
);
