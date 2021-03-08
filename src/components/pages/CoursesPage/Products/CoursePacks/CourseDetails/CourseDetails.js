import { useHistory } from "react-router-dom";
import DetailsImage from "./DetailsImage/DetailsImage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
import Increment from './DetailsImage/Increment.png'
function CourseDetails() {
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    return (
        // <button type="button" onClick={handleClick}>
        //   Go home
        // </button>
        // <div className="d-flex flex-column bd-highlight mb-3">
        //     <div className="p-2 bd-highlight" style = {{width: "100%"}}>
        //         <DetailsImage />
        //     </div>
        // </div>
        <div className = "kits-details">
            <DetailsImage />
            <ListGroup variant="flush">
                <ListGroup.Item style ={{ fontSize : "20px"}}>FEATURES:</ListGroup.Item>
                <ListGroup.Item>- Inspiring Personalities - Stories with hand
                drawn illustrations
                Albert Einstein
                Maryam Mirzakhani
	Sadequain</ListGroup.Item>
                <ListGroup.Item>- Activity sheets for each Story</ListGroup.Item>
                <ListGroup.Item>- Thinking games including: Sentence
    Building Blocks and Multiples in a Row</ListGroup.Item>
                <ListGroup.Item> - 2 Dice and 30 wooden counters</ListGroup.Item>
                <ListGroup.Item> - Tangram Blocks</ListGroup.Item>
                <ListGroup.Item> - Cut & colour activity booklet and
    colouring pencils</ListGroup.Item>
                <ListGroup.Item> - Dot & Line Cheque Book</ListGroup.Item>
                <ListGroup.Item style ={{marginTop : "4rem", fontSize : "20px"}}>PRODUCT DESCRIPTION: </ListGroup.Item>
                <ListGroup.Item> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula et risus fringilla vestibulum. Pellentesque porttitor sed eros at congue. Suspendisse sagittis finibus neque vel pulvinar. Mauris id tellus ut sem commodo lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula et risus fringilla vestibulum. Pellentesque porttitor sed eros at congue. Suspendisse sagittis finibus neque vel pulvinar. Mauris id tellus ut sem commodo lacinia. Duis ac scelerisque nisl, vel viverra elit. Duis ac scelerisque nisl, vel viverra elit. </ListGroup.Item>
            </ListGroup>
          <div className="d-flex justify-content-center">
          <img src = {Increment} style = {{cursor: "pointer"}}/>
          </div>
            <div className="d-flex justify-content-center">
                
                <Button variant="primary" size="lg" style = {{width: "70%",marginTop: "1rem"}}>
                   Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default CourseDetails