import Pizza from "../components/Pizza";
import focaccia from "../assets/pizzas/focaccia.jpg";
import margherita from "../assets/pizzas/margherita.jpg";
import spinaci from "../assets/pizzas/spinaci.jpg";
import funghi from "../assets/pizzas/funghi.jpg";
import salamino from "../assets/pizzas/salamino.jpg";
import prosciutto from "../assets/pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];


const Menu = () => {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length-0

  return (
    <main className='menu'>
        <h2>Our menu</h2>

        {numPizzas > 0? (
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from. All
                    from our stone oven, all organic, all delicious.
                </p>

                <ul className='pizzas'>
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}
                </ul>
            </>
        ) : (
            <p>We are still working on our menu. Please come back later :)</p>
        )}
    </main>
  )
}

export default Menu