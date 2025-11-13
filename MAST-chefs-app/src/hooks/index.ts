import { useState, useEffect } from 'react';

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from an API or local storage
    const fetchMenuItems = async () => {
      // Example fetch logic (replace with actual API call)
      const response = await fetch('https://api.example.com/menu-items');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  const removeMenuItem = (id) => {
    setMenuItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return { menuItems, removeMenuItem };
};