import { 
    BrowserRouter as Router,
    Switch,  //Switch
    Route} from "react-router-dom";
import Detail from"./routes/Detail";
import Home from"./routes/Home";

//route를 바라보는 component(Home, Detail.js)를 렌더링하는 역할
function App() {
    return (
    <Router>
         {/* route(url)을 찾는 역할 */}
        <Switch>
            <Route path="/hello">
                <h1>hello</h1>
            </Route>
            <Route path="/movie/:id">
                <Detail/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;
