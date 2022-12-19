import {React} from "react";
import BookStore from "./BookStore";

function Project3() {
  const bookList = [
{ title: "Supranatural",
  author: "Joe Dispenza",
  description: `"The book outlines principles and practices that help ordinary people improve health, mood, finances, and relationships.
  The mind is a powerful tool. It can create matter from energy. The mind has the capacity to cure diseases
  with positive thoughts and beliefs, but most people don’t do this because they are stuck in their past pain."`,
  price: 50.33
}, 

{ title: "Atomic Habits",
  author: "James Clear",
  description: `"
  An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.
  Bad habits repeat themselves again and again not because you don’t want to change, but because you have the wrong system for change.
  Changes that seem small and unimportant at first will compound into remarkable results if you’re willing to stick with them for years."`,
  price: 30.99
},

{ title: "Lifespan",
  author: "David Sinclair", 
  descriptioon: "\"Lifespan by David A. Sinclair addresses a new perspective on life itself and presents a cure for humanity's biggest fear: aging. While there's no cure to death, molecular biology, nutrition, and medical advancements found a way to treat aging just as if it was a disease.\"",
  price: 60
}
  ];
return (
  <div>
   <h1>Hello world</h1>
   <BookStore title={bookList[0].title} author={bookList[0].author} price={bookList[0].price} description={bookList[0].description}/>
  </div>
);
}

export default Project3;

