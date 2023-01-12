import BookDescription from "./BookDescription";

function BookStore(props){
    return (
        <div>
             <h2>{props.title}</h2>
             <h3>{props.author}</h3>
             <BookDescription description={props.description}/>
             <h4>{props.price}</h4>
        </div>
    );
}

export default BookStore;