import { writable } from "svelte/store";

//*Compartrir entre componentes
export const likeCount = writable(0);
