export interface Product {
  id: number;
  name: string;
  price: number | null;
  description: string;
  image: string | null;
  images?: string[];
  imageContain?: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 2,
    name: "Huevera 32",
    price: 1690,
    description:
      "Huevera de madera con capacidad para 32 huevos. Dimensiones: 26 x 41 x 15 cm.",
    image: "/products/huevera32.jpg",
    images: [
      "/products/huevera32.jpg",
      "/products/huevera24.jpg",
    ],
    category: "Cocina",
  },
  {
    id: 3,
    name: "Tabla de degustación artesanal",
    price: 450,
    description:
      "Tabla rústica con cuencos de cerámica para picadas, salsas y comidas compartidas. Bordes naturales y terminación artesanal hecha a mano.",
    image: "/products/tabla_degustacion.jpg",
    images: [
      "/products/tabla_degustacion.jpg",
      "/products/tabla.mp4",
    ],
    category: "Mesa",
  },
  {
    id: 4,
    name: "Huevera repisa",
    price: 2290,
    description:
      "Huevera de pared con espacio para 24 huevos, especias y papel de cocina. Dimensiones: 31 x 44 cm.",
    image: "/products/hrepisablanca.jpeg",
    images: [
      "/products/hrepisablanca.jpeg",
      "/products/hrepisablanca2.jpeg",
      "/products/hrepisablanca3.jpeg",
      "/products/hrepisablanca4.jpeg",
    ],
    imageContain: true,
    category: "Cocina",
  },
  {
    id: 5,
    name: "Espejo perchero artesanal",
    price: null,
    description:
      "Fabricado con piques de alambrado y clavos de vía. Dimensiones: 55 x 90 cm.",
    image: "/products/espejo_perchero.jpg",
    images: [
      "/products/espejo_perchero.jpg",
      "/products/perchero.mp4",
    ],
    category: "Decoración",
  },
];
