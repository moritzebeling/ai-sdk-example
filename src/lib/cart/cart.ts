import { writable } from 'svelte/store';
import type { Product } from '../data/fielmann';

export const cart = writable<Product[]>([]);

export function addToCart(item: Product) {
  cart.update((items) => {
    return [...items, item];
  });
}