import { useState } from "react"
import { data } from "../data"
import './productComponent.css'

export function productComponent (){
    const [card, setCard] = useState(data);
    console.log(card);


        return (
            <div className="product-data">
                {card.map((prod, idx)=>(

         <Card style={{ width: '18rem',padding:"15px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p className="price-cart">price</p>
        <p className="rating-data">rating</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body> 
      <div className="btn-area">
        <Button variant="primary">Go somewhere</Button>
        <Button variant="secondry">Go somewhere</Button>.

        </div>
        </Card>
                ))}
                </div>
        )
                }