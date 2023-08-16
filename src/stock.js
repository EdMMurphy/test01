import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

     componentDidMount(){
        this.fetchStock();
     }

     fetchStock(){
        
     }

    render(){
        return (
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}

export default Stock;