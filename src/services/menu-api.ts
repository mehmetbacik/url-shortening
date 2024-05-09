import menuData from "../data/menuItems.json";

const getMenuItems = async () => {
  try {
    const menuItems = menuData.map((item) => ({
      title: item.title,
      path: item.path,
    }));

    return menuItems;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};

export default getMenuItems;
