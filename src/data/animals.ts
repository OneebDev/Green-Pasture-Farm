import goat1 from "@/assets/goat-1.jpg";
import goat2 from "@/assets/goat-2.jpg";
import goat3 from "@/assets/goat-3.jpg";
import cow1 from "@/assets/cow-1.jpg";
import cow2 from "@/assets/cow-2.jpg";
import cow3 from "@/assets/cow-3.jpg";

export type Animal = {
  id: string;
  name: string;
  type: "goat" | "cow";
  breed: string;
  age: string;
  weight: string;
  image: string;
  health: string;
  feeding: string;
  description: string;
};

export const animals: Animal[] = [
  {
    id: "g-101",
    name: "Sultan",
    type: "goat",
    breed: "Beetal",
    age: "1.5 years",
    weight: "55 kg",
    image: goat1,
    health: "Vaccinated · Healthy",
    feeding: "Fresh fodder, grains, mineral mix",
    description: "Strong build with bright coat — raised with daily care and natural feed.",
  },
  {
    id: "g-102",
    name: "Kala Sheikh",
    type: "goat",
    breed: "Desi Black",
    age: "2 years",
    weight: "62 kg",
    image: goat2,
    health: "Vaccinated · Dewormed",
    feeding: "Grass, gram, seasonal greens",
    description: "Majestic curved horns and a calm temperament — a standout of the herd.",
  },
  {
    id: "g-103",
    name: "Sona",
    type: "goat",
    breed: "Beetal",
    age: "1 year",
    weight: "48 kg",
    image: goat3,
    health: "Vaccinated · Healthy",
    feeding: "Green fodder, dry hay, supplements",
    description: "Tall, golden-coated bakra with a graceful posture and excellent health record.",
  },
  {
    id: "c-201",
    name: "Noor",
    type: "cow",
    breed: "Sahiwal",
    age: "3 years",
    weight: "420 kg",
    image: cow1,
    health: "Vaccinated · Dewormed",
    feeding: "Berseem, silage, mineral mix",
    description: "Premium Sahiwal cow with a strong frame, raised on natural pasture.",
  },
  {
    id: "c-202",
    name: "Lalee",
    type: "cow",
    breed: "Desi Red",
    age: "2.5 years",
    weight: "380 kg",
    image: cow2,
    health: "Vaccinated · Healthy",
    feeding: "Fresh fodder, wheat straw, grains",
    description: "Rich brown coat and a calm nature — well-suited for a family farm.",
  },
  {
    id: "c-203",
    name: "Chand",
    type: "cow",
    breed: "Friesian Cross",
    age: "3 years",
    weight: "450 kg",
    image: cow3,
    health: "Vaccinated · Dewormed",
    feeding: "Silage, green fodder, supplements",
    description: "Striking black-and-white markings, gentle and well-mannered.",
  },
];
