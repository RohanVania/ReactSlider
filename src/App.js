import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data"
import "./index.css"

const App = () => {
    return (
        <div className="wrapper">
            <div className="text-center">
                <h1 className="main-header">Our Testimonials</h1>
                <div className="underline"> </div>

                <Testimonials reviews={reviews} />

            </div>
        </div>
    )

};

export default App;
