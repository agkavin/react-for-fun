function Food() {
    const food1 = "Briyani ";
    const food2 = "Chicken ";

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li> 
        </ul>
    );
}

export default Food