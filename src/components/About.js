import { User } from "./User";
import { UserClass } from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)

        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

    render() {

        console.log("Parent Render")

        return (
            <div>
                <h1>hi this is about us page</h1>
                <h2>i am currently learning react-router-dom</h2>

                {/* <User name={"pavan (function)"} /> */}

                <UserClass name={"pavan (class1)"} location={"Vizag (Class)"} />
                <UserClass name={"pavan (class2)"} location={"Vizag (Class)"} />
            </div>
        )
    }
}



export default About;