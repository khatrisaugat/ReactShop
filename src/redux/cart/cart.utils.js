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
export const removeItems = (items, itemToRemove) => {
  return items
    .map((item) =>
      item.id === itemToRemove.id
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : null
        : item
    )
    .filter((item) => item !== null);
};
