'use client';

import { useLoginButton } from '../hooks';

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export const LoginButtonPresentation: React.FC = () => {
  const { handleLogin } = useLoginButton();
  return (
    <div className="mt-20 flex flex-col gap-6">
      <Typography variant="strong">アカウントをお持ちの場合</Typography>
      <Button
        className="w-72 rounded-full border-gray-400 font-bold text-primary"
        variant="outline"
        onClick={(): void => handleLogin()}
      >
        ログイン
      </Button>
    </div>
  );
};
