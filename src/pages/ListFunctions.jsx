export default function ListFunctions() {
  const fruits = [
    { id: 1, name: "Apple", Calories: 95 },
    { id: 2, name: "Banana", Calories: 105 },
    { id: 3, name: "Orange", Calories: 45 },
    { id: 4, name: "Mango", Calories: 155 },
  ];
  //fruits.sort((a,b)=>a.name.localeCompare(b.name));
  fruits.sort((a,b)=>a.Calories-b.Calories);



  const lowCalFruits = fruits.filter((fruit) => fruit.Calories < 100);
  const highCalFruits = fruits.filter((fruit) => fruit.Calories > 100);

  const AllFruits = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; {fruit.Calories ? fruit.Calories : "No Calories"}
    </li>
  ));

  const LowCalFruitsList = lowCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; {fruit.Calories ? fruit.Calories : "No Calories"}
    </li>
  ));

  const HighCalFruitsList = highCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; {fruit.Calories ? fruit.Calories : "No Calories"}
    </li>
  ));

  return (<>
  <h2>All fruits</h2>
    <ol>{AllFruits}</ol>

    <h2>Low Calorie fruits</h2>
    <ol>{LowCalFruitsList}</ol>

    <h2>High Calorie fruits</h2>
    <ol>{HighCalFruitsList}</ol>

  </>);
}
