import heroData from "../data/heroItems.json";

const getHeroItems = async () => {
  try {
    const heroItems = heroData.map((item) => ({
      title: item.title,
      description: item.description,
      imagePath: item.imagePath,
      buttonContent: item.buttonContent,
    }));

    return heroItems;
  } catch (error) {
    console.error("Error fetching hero items:", error);
    return [];
  }
};

export default getHeroItems;
