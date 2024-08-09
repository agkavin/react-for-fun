export default function List(props) {
    const ItemList = props.items;
    const ListItems = ItemList.map((item) => (
        <li key={item.id}>
          {item.name} : &nbsp; {item.Calories ? item.Calories : "No Calories"}
        </li>
      ));

    return (<ol>{ListItems}</ol>);
  }
  