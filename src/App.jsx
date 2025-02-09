const Card = ({ title }) => {
  return (
    <div
      className="card"
      // inline style
      // style={{
      //   border: "1px solid #4b5462",
      //   padding: "20px",
      //   margin: "10px",
      //   backgroundColor: "#31363f",
      //   borderRadius: "10px",
      //   minHeight: "100px",
      // }}
    >
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Ceyhun", surname: "Ergün" }]}
      />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

// // Class component
// class ClassComponent extends React.Component {
//   render() {
//     return <h1>Class Component</h1>;
//   }
// }

export default App;
