type IUseReplyButton = {
  handleReply: () => void;
};

export const useReplyButton = (id: string): IUseReplyButton => {
  const handleReply = (): void => {
    console.log(id);
  };
  return { handleReply };
};
