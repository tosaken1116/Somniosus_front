type IUseFavoriteButton = {
  handleFavorite: () => void;
};

export const useFavoriteButton = (id: string): IUseFavoriteButton => {
  const handleFavorite = (): void => {
    console.log(id);
  };
  return { handleFavorite };
};
