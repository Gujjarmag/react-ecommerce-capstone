import Egg from "../assets/images/Egg.webp";
import StoneAxe from "../assets/images/Stone_Axe.webp";
import Bronze_Axe from "../assets/images/Bronze_Axe.webp";
import CopperHammer from "../assets/images/CopperHammer.webp";
import Bronze_Hammer from "../assets/images/Bronze_Hammer.webp";
import Stone_Knife from "../assets/images/Stone_Knife.webp";
import Copper_Knife from "../assets/images/Copper_Knife.webp";
import Stone_Pickaxe from "../assets/images/Stone_Pickaxe.webp";
import Bronze_Pickaxe from "../assets/images/Bronze_Pickaxe.webp";
import Copper_Shovel from "../assets/images/Copper_Shovel.webp";
import Bronze_Shovel from "../assets/images/Bronze_Shovel.webp";
import Felt_Vest from "../assets/images/Felt_Vest.webp";
import Quilted_Vest from "../assets/images/Quilted_Vest.webp";
import Tunic from "../assets/images/Tunic.webp";
import FurShoes from "../assets/images/FurShoes.webp";
import SimpleShoes from "../assets/images/SimpleShoes.webp";

export const products = [
  {
    id: 1,
    name: "Egg",
    price: 1.5,
    weight: "0.05 kg",
    image: Egg,
    images: [Egg, Egg, Egg],

    description:
      "A type of food. Collected from the Henhouse or Goose House. Can be consumed or cooked into various dishes in the Kitchen.",
  },
  {
    id: 2,
    name: "Stone Axe",
    price: 10.5,
    weight: "2.5 kg",
    image: StoneAxe,
    images: [StoneAxe, StoneAxe, StoneAxe],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for cutting down trees and hacking them into Logs.",
  },
  {
    id: 3,
    name: "Bronze Axe",
    price: 945,
    weight: "3.5 kg",
    image: Bronze_Axe,
    images: [Bronze_Axe, Bronze_Axe, Bronze_Axe],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for cutting down trees and hacking them into Logs.",
  },
  {
    id: 4,
    name: "Copper Hammer",
    price: 195,
    weight: "2.0 kg",
    image: CopperHammer,
    images: [CopperHammer, CopperHammer, CopperHammer],

    description:
      "Hammer is used for building, repairing, upgrading and destroying structures.",
  },
  {
    id: 5,
    name: "Bronze Hammer",
    price: 465,
    weight: "2.0 kg",
    image: Bronze_Hammer,
    images: [Bronze_Hammer, Bronze_Hammer, Bronze_Hammer],
    description:
      "Hammer is used for building, repairing, upgrading and destroying structures.",
  },
  {
    id: 6,
    name: "Stone Knife",
    price: 7.5,
    weight: "0.5 kg",
    image: Stone_Knife,
    images: [Stone_Knife, Stone_Knife, Stone_Knife],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for skinning and butchering animals.",
  },
  {
    id: 7,
    name: "Copper Knife",
    price: 195,
    weight: "0.5 kg",
    image: Copper_Knife,
    images: [Copper_Knife, Copper_Knife, Copper_Knife],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for skinning and butchering animals.",
  },
  {
    id: 8,
    name: "Stone Pickaxe",
    price: 10.5,
    weight: "3.0 kg",
    image: Stone_Pickaxe,
    images: [Stone_Pickaxe, Stone_Pickaxe, Stone_Pickaxe],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for mining minerals.",
  },
  {
    id: 9,
    name: "Bronze Pickaxe",
    price: 930,
    weight: "5.0 kg",
    image: Bronze_Pickaxe,
    images: [Bronze_Pickaxe, Bronze_Pickaxe, Bronze_Pickaxe],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for mining minerals.",
  },
  {
    id: 10,
    name: "Copper Shovel",
    price: 270,
    weight: "3.0 kg",
    image: Copper_Shovel,
    images: [Copper_Shovel, Copper_Shovel, Copper_Shovel],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for extracting Clay from Clay Deposits.",
  },
  {
    id: 11,
    name: "Bronze Shovel",
    price: 540,
    weight: "3.0 kg",
    image: Bronze_Shovel,
    images: [Bronze_Shovel, Bronze_Shovel, Bronze_Shovel],

    description:
      "A type of tool. Crafted at the Anvil in the Smithy. Can be used for extracting Clay from Clay Deposits.",
  },
  {
    id: 12,
    name: "Felt Vest",
    price: 1650,
    weight: "0.7 kg",
    image: Felt_Vest,
    images: [Felt_Vest, Felt_Vest, Felt_Vest],

    description:
      "A type of clothing. Crafted at the Tailoring Table in the Sewing Hut. Can be used for wearing and temperature control.",
  },
  {
    id: 13,
    name: "Quilted Vest",
    price: 1995,
    weight: "0.8 kg",
    image: Quilted_Vest,
    images: [Quilted_Vest, Quilted_Vest, Quilted_Vest],

    description:
      "A type of clothing. Crafted at the Tailoring Table in the Sewing Hut. Can be used for wearing and temperature control.",
  },
  {
    id: 14,
    name: "Tunic",
    price: 1260,
    weight: "0.5 kg",
    image: Tunic,
    images: [Tunic, Tunic, Tunic],

    description:
      "A type of clothing. Crafted at the Tailoring Table in the Sewing Hut. Can be used for wearing and temperature control.",
  },
  {
    id: 15,
    name: "Fur Shoes",
    price: 360,
    weight: "0.25 kg",
    image: FurShoes,
    images: [FurShoes, FurShoes, FurShoes],

    description:
      "A type of clothing. Crafted at the Tailoring Table in the Sewing Hut. Can be used for wearing and temperature control.",
  },
  {
    id: 16,
    name: "Simple Shoes",
    price: 150,
    weight: "0.15 kg",
    image: SimpleShoes,
    images: [SimpleShoes, SimpleShoes, SimpleShoes],

    description:
      "A type of clothing. Crafted at the Tailoring Table in the Sewing Hut. Can be used for wearing and temperature control.",
  },
];
