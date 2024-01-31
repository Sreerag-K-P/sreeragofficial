// export default async function Home() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await users.json();

//   return (
//     <div>
//       {data.map((item) => (
//         <h1 key={item.id}>{item.name}</h1>
//       ))}
//       <h1>---------------------------</h1>
//       <div>
//         {data.map((item) => (
//           <h1 key={item.id}>{item.id == "1" && item.name}</h1>
//         ))}
//       </div>
//       <div>{data[0].name}</div>
//       <div>
//         {data.map((item) => (
//           <h1 key={item.id}>{item.id == "2" && item.address.street}</h1>
//         ))}
//       </div>
//       <div>
//         {
//           data.find((item) => item.address.street == "Victor Plains").address
//             .street
//         }
//       </div>
//     </div>
//   );
// }
