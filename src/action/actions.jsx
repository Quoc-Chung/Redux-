import { INCREMENT, DECREMENT } from "./types";

export const inCreaseCounter = () => ({
  type: INCREMENT,
});

export const deCreaseCounter = () => ({
  type: DECREMENT,
});
