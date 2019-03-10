import React from 'react';
import Button from './component/button/Button';

const handle = (obj)=>{
    // console.log(this.state.text);
    console.log(obj.state.text);
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "hi",
        }
    }
    
    render() {
        return <div>
            <Button shape="circle"/>
            <Button shape="rectangle" myClick={handle.bind({}, this)}>parent</Button>
        </div>
    }
}

export default App;
