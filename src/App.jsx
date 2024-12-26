import { FruitCard } from "./components/FruitCard"



function App() {
  const fruitList = [
    {
      "id": 1,
      "name": "Morango",
      "category": "vermelha",
      "price": 12
    },
    {
      "id": 2,
      "name": "Banana",
      "category": "amarela",
      "price": 2
    },
    {
      "id": 3,
      "name": "Amora",
      "category": "vermelha",
      "price": 5
    }
  ]

  return (
   <>
    <ul>
      {fruitList.map(fruit =>(
        <FruitCard key={fruit.id} fruit={fruit} />
      )
    )}
    </ul>
   </>
  )
}

export default App
