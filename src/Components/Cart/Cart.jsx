
// // import spinaci from '../assets/spinaci.jpg';
// // import funghi from '../assets/funghi.jpg';
// // import salamino from '../assets/salamino.jpg';
// // import  margherita from '../assets/margherita.jpg';
// // import focaccia from '../assets/focaccia.jpg';

// // import style from 'Cart.css'


// const Cart = () => {
//   return (
//     <img src="../assets/salamino.jpg" alt="Salamino" />
//   );
// };

// // const spinaci = require('../assets/spinaci.jpg');
// // const funghi = require('../assets/funghi.jpg');

// export default function PizzaMenu() {
//   const pizzas = [
//     {
//       name: 'Spinaci',
//       image: spinaci,
//       description: 'Material such as tomato, potato, chess and...',
//     },
//     {
//       name: 'Funghi',
//       image: funghi,
//       description: 'Material such as tomato, potato, chess and...',
//     },
//     {
//         name: 'salamino',
//         image: salamino,
//         description: 'Material such as tomato, potato, chess and...',
//       },
//       {
//         name: 'margherita',
//         image: margherita,
//         description: 'Material such as tomato, potato, chess and...',
//       },
//       {
//         name: 'focaccia',
//         image: focaccia,
//         description: 'Material such as tomato, potato, chess and...',
//       },
//   ];

//   return (
//     <div>
//       <h1>Pizza Menu</h1>
//       <ul>
//         {pizzas.map((pizza, index) => (
//           <li key={index}>
//             <img src={pizza.image} alt={pizza.name} />
//             <h2>{pizza.name}</h2>
//             <h3>{pizza.description}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }