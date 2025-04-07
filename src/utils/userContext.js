import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "Hi Pavan!",
})

export default userContext;