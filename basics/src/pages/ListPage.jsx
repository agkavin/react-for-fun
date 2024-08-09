import List from "./List.jsx";

export default function ListPage() {
    const fruits = [
        { id: 1, name: "Apple", Calories: 95 },
        { id: 2, name: "Banana", Calories: 105 },
        { id: 3, name: "Orange", Calories: 45 },
        { id: 4, name: "Mango", Calories: 155 },
      ];
    return <List items={fruits} category="Fruits" />;
}