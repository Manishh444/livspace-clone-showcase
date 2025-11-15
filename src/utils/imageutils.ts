// const createImageArray = (folder: string, count: number) =>
//   Array.from(
//     { length: count },
//     (_, i) => `/product_img/${folder}/${i + 1}.jpg`
//   );

const createImageArray = (
  folder: string,
  start: number,
  count: number,
  date: string = "20251102"
) => {
  return Array.from({ length: count }, (_, i) => {
    const number = start + i;
    const formatted = number.toString().padStart(4, "0"); // WA0009 → WA0010 format
    return `/product_img/${folder}/IMG-${date}-WA${formatted}.jpg`;
  });
};

export const fosrocImg = createImageArray("fosroc", 9, 7, "20251110");
export const gyprocImg = createImageArray("gyproc", 18, 10, "20251110");
export const roff = createImageArray("roff", 1, 10, "20251114");


// Example usage in a component
// import { homeImages } from "@/utils/imageutils";
//