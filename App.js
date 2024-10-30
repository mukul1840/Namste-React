
const heading = React.createElement("div",{id:"parent"},
    
    React.createElement("h1",{},"Hello from h1 tag"));


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);