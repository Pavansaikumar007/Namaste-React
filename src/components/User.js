
//Function Component
export const User = (props) => {
    return(
        <div className="Class-Component">
            <h2 className=" font-bold">Name : {props.name}</h2>
            <h3>Location : Vizag</h3>
            <h3>Role : Frontend</h3>
        </div>
    )
}