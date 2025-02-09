import { useState, useEffect } from "react";

//eslint-disable-next-line
// const Card = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} has been liked: ${hasLiked}`);
//     //eslint-disable-next-line
//   }, [hasLiked]);

//   useEffect(() => {
//     console.log("Card Rendered");
//   }, []);
//   return (
//     <div
//       className="card"
//       onClick={() => setCount(count + 1)}
//       // inline style
//       // style={{
//       //   border: "1px solid #4b5462",
//       //   padding: "20px",
//       //   margin: "10px",
//       //   backgroundColor: "#31363f",
//       //   borderRadius: "10px",
//       //   minHeight: "100px",
//       // }}
//     >
//       <h2>
//         {title}
//         <br />
//         {count || null}
//       </h2>
//       <button onClick={() => setHasLiked(!hasLiked)}>
//         {hasLiked ? "❤️" : "🤍"}
//       </button>
//     </div>
//   );
// };

const App = () => {
  return (
    // <div className="card-container">
    //   <Card
    //     title="Star Wars"
    //     rating={5}
    //     isCool={true}
    //     actors={[{ name: "Ceyhun", surname: "Ergün" }]}
    //   />
    //   <Card title="Avatar" />
    //   <Card title="The Lion King" />
    // </div>

    <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
  );
};

// // Class component
// class ClassComponent extends React.Component {
//   render() {
//     return <h1>Class Component</h1>;
//   }
// }

export default App;
