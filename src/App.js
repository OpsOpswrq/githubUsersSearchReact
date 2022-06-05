import React,{Component} from "react";
import Search from "./Search";
import List from "./List";
class App extends Component{
    render() {
        return (
            <div>
                <Search/>
                <List/>
            </div>
        )
    }
}
export default App;