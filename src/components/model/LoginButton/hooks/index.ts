import { useRouter } from 'next/navigation';

type IUseLoginButton = {
  handleLogin: () => void;
};

export const useLoginButton = (): IUseLoginButton => {
  const router = useRouter();
  const handleLogin = (): void => {
    router.push('/home');
  };
  return { handleLogin };
};
