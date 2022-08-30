export const addItems = (items, itemsToAdd) => {
  const existingItem = items.find((item) => item.id === itemsToAdd.id);
  if (existingItem) {
    return items.map((item) =>
      item.id === itemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...items, { ...itemsToAdd, quantity: 1 }];
};
