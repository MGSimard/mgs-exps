import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};
