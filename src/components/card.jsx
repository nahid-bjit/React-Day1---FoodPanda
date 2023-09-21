import "./card.css";
import FoodButton from "./food-button";

const Card = () => {

    return (

        <>

            <div class="card">
                <img src="../src/assets/panda.jpg" alt="Card Image" />
                <div class="card-content">
                    <h2 class="card-title">Burger</h2>
                    <p class="card-text">This is a simple card example. You can add your content here.</p>
                    <a href="#" class="card-button">Order</a>
                </div>
            </div>


        </>

    )



}

export default Card