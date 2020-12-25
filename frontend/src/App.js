import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import LiveChat from "./components/LiveChat/Livechat";
function App() {
	return (
		<div className="w-full h-full flex justify-center">
			<BrowserRouter>
				<Switch>
					<Route exact path="/chat" component={LiveChat} />
					<Route exact path="/" component={Login} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
