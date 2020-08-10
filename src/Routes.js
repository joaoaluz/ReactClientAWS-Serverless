import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./containers/Home/Home"
import NotFound from "./containers/NotFound/NoteFound"

export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
              <NotFound />
            </Route>
        </Switch>
    )
}

