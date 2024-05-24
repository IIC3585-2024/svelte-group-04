import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store for favorites
export const favorites = writable<number[]>(
	browser && JSON.parse(localStorage.getItem('favorites') || '[]')
);

// Update local storage on change
favorites.subscribe((currentFavorites) => {
	if (browser) return localStorage.setItem('favorites', JSON.stringify(currentFavorites));
});

export const toggleFavorite = (id: number) => {
	favorites.update((currentFavorites) => {
		if (currentFavorites.includes(id)) {
			return currentFavorites.filter((favoriteId) => favoriteId !== id);
		}
		return [...currentFavorites, id];
	});
};

export const isFavorite = (id: number): boolean => {
	let isFav = false;
	favorites.subscribe((currentFavorites) => {
		if (!currentFavorites) return [];

		isFav = currentFavorites.includes(id);
	})();
	return isFav;
};
