export const FruitCard = ({fruit}) =>{
    return(
        <li>
          <h3>{fruit.name}</h3>
          <p>{fruit.category}</p>
          <p>{fruit.price}</p>
        </li>
    )
}