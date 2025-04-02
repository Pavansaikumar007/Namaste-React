import React from "react"


//class Based Component 
export class UserClass extends React.Component {
    constructor(props) {
        super(props)

        console.log("Child Constructor");
        

        this.state = {
            count: 0,
            count1: 2
        }
    }

    componentDidMount(){
        console.log("Child componentDidMount")
    }


    render() {
        const { name, location } = this.props

        console.log('child Render')

        return (
            <div className="Class-Component">
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>
                    Count Increase</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Role : Frontend</h3>
            </div>
        )
    }
}