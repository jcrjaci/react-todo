import React from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Search from "./search";
import Results from "./results";

const App = () => 
<div>
    <Title title={'todos'}/>
    <Search />
    <Results />
</div>;

export default App;