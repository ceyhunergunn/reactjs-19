const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

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
