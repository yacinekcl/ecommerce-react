import prebuiltGaming from '../assets/prebuilt-gaming.jpg';
import ryzen7 from '../assets/CPU-ryzen-7-5800x.jpg';
import asusMotherboard from '../assets/Motherboard-rog-strix.png';
import rtx4070 from '../assets/GPU-rtx-4070.png';
import corsairVengeance from '../assets/RAM-corsair-vengeance.jpg';
import noctuaDh from '../assets/FAN-noctua-nh.jpg';
import fractalDesign from '../assets/case-fractl-design.jpg';
import prebuiltOffice from '../assets/prebuilt-office.jpg';


const products = [
   {
    id: 1,
    name: "Gaming PC Pro",
    category: "Prebuilt PCs",
    price: 150000,
    image: prebuiltGaming,
    description: "High-performance gaming PC with RTX 4070"
  },
  {
    id: 2,
    name: "AMD Ryzen 7 5800X",
    category: "CPU",
    price: 35000,
    image: ryzen7,
    description: "8-core, 16-thread processor"
  },
  {
    id: 3,
    name: "ASUS ROG Strix B550-F",
    category: "Motherboard",
    price: 22000,
    image: asusMotherboard,
    description: "ATX Gaming motherboard"
  },
  {
    id: 4,
    name: "NVIDIA RTX 4070",
    category: "GPU",
    price: 85000,
    image: rtx4070,
    description: "12GB GDDR6X Graphics Card"
  },
  {
    id: 5,
    name: "Corsair Vengeance 32GB",
    category: "RAM",
    price: 18000,
    image: corsairVengeance,
    description: "DDR4 3200MHz Memory Kit"
  },
  {
    id: 6,
    name: "Noctua NH-D15",
    category: "Fans",
    price: 12000,
    image: noctuaDh,
    description: "Premium CPU Cooler"
  },
  {
    id: 7,
    name: "Fractal Design Define 7",
    category: "Cases",
    price: 16000,
    image: fractalDesign,
    description: "Mid-tower ATX Case"
  },
  {
    id: 8,
    name: "Office PC Basic",
    category: "Prebuilt PCs",
    price: 45000,
    image: prebuiltOffice,
    description: "Perfect for office work and basic tasks"
  }
];

export default products;
