// Zarządzanie koszykiem

const key = "Koszyk_IT_SPA";

export const koszykManager = {
	addItem(item) {
    const koszyk = localStorage.getItem(key);

    if (koszyk === null) {
      const content = {
        [item.id]: { quantity: 1, item: item },
      };
      const stringifiedContent = JSON.stringify(content);
      localStorage.setItem(key, stringifiedContent);
    } else {
      const parsedContent = JSON.parse(koszyk);

      if (parsedContent.hasOwnProperty(item.id)) {
        parsedContent[item.id].quantity += 1;
      } else {
        parsedContent[item.id] = { quantity: 1, item: item };
      }

      const stringifiedContent = JSON.stringify(parsedContent);
      localStorage.setItem(key, stringifiedContent);
    };
  },

  removeItem(item) {
    const koszyk = localStorage.getItem(key);

    if (koszyk !== null) {
      const parsedContent = JSON.parse(koszyk);

      if (parsedContent.hasOwnProperty(item.id)) {
        const quantity = parsedContent[item.id].quantity;

        if (quantity > 1) {
          parsedContent[item.id].quantity -= 1;
        } else {
          parsedContent[item.id] = undefined;
        }

        const stringifiedContent = JSON.stringify(parsedContent);
        localStorage.setItem(key, stringifiedContent);
      };
    };
  },

  getAllItems() {
		const koszyk = localStorage.getItem(key);

		if (koszyk === null) {
			return [];
		} else {
			const parsedContent = JSON.parse(koszyk);
			return Object.values(parsedContent);
		};
	},

  getTotal() {
		const koszyk = localStorage.getItem(key);

		if (koszyk === null) {
			return 0;
		} else {
			const parsedContent = JSON.parse(koszyk);
			return Object.values(parsedContent)
										.reduce((accumulator, cartObject) => {
											return accumulator + cartObject.quantity * cartObject.item.price;
										}, 0);
		};
	},

};
