import { twMerge } from "tailwind-merge"
import {clsx} from "clsx";

export function capitalizeFirstLetter(word:string):string{
  return word.charAt(0).toUpperCase()+word.slice(1)
}

export function cn(){
  twMerge(clsx())
}