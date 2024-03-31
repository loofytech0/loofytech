export const directWa = (param: string) => {
  return window.open("https://api.whatsapp.com/send?phone=6285377344144&text=" + param);
}