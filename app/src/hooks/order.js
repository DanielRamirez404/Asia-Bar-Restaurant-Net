import { useState, useEffect, useMemo } from 'react';

import { getDishData } from '../utils/api.js';
   
const dbCategories = ["main-dish", "side-dish", "product"]
export const categories = [...dbCategories];
categories.push("all");

export function useCategory() {
    const [category, setCategory] = useState(categories[dbCategories.length]);

    const changeCategory = (index) => {
        setCategory(categories[index]);
    };

    return [category, changeCategory];

}

export function useDishes(category) {
    const [dishes, setDishes] = useState([]);

    const updateData = async () => {
        if (category === categories[dbCategories.length]) {
            const allDishes = [];

            for (const dbCategory of dbCategories) {
                const data = await getDishData(dbCategory);
                allDishes.push(...data);
            }

            setDishes(allDishes);

            return;
        }

        const data = await getDishData(category);

        setDishes(data);
    };

    useEffect( () => {
        updateData();
    }, [category]);

    return dishes;
} 
