import {Button} from "react-bootstrap";

export default function Novinky_index() {
    return (
        <div className="container" id="obj">

            <h1>Novinky
                <span>
                    <Button variant={"outline-success"} >
                        +
                    </Button>
                </span>
            </h1>
            <hr/>

            <div id="grid">
            </div>
        </div>
    );
}

