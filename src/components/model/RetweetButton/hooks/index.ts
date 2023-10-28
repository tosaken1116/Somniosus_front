type IUseRetweetButton = {
  handleRetweet: () => void;
};

export const useRetweetButton = (id: string): IUseRetweetButton => {
  const handleRetweet = (): void => {
    console.log(id);
  };
  return { handleRetweet };
};
