import { createSelector } from 'reselect';

export const selectAllProducts = (state) => state.shop.allProducts;

export const selectUniqueCategories = createSelector(
    [selectAllProducts],
    (allProducts) => {
        const categories = allProducts
            .map(p => p.category)
            .filter(category => category); // 👈 filters out undefined or empty categories
        return ['All', ...Array.from(new Set(categories))];
    }
);

// NEW: Proper category counts selector
export const selectCategoryCounts = createSelector(
    [selectAllProducts],
    (allProducts) => {
        const counts = {};
        allProducts.forEach(product => {
            if (product.category) { // 👈 check if category exists
                counts[product.category] = (counts[product.category] || 0) + 1;
            }
        });
        return counts;
    }
);
