import { writable } from 'svelte/store';

export const cart = writable([]);

export function addToCart(item) {
  cart.update((items) => {
    return [...items, item];
  });
}