export interface Member {
  name: string;
  description: string;
  image: string;
  type: "Common" | "Rare" | "Ultra-rare";
  hidden: boolean;
  mainColor: string;
}
