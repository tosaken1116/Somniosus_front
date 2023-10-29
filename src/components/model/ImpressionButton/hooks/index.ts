import { id } from 'date-fns/locale';

type IUseImpressionButton = {
  handleImpression: () => void;
};

export const useImpressionButton = (): IUseImpressionButton => {
  const handleImpression = (): void => {
    console.log(id);
  };
  return { handleImpression };
};
