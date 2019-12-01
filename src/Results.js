import React, { Component } from 'react';

class Results extends Component {
    render (){
        return (
            <div id='resultsPopup' className='resultsPopup'>
                <h2>Skates in your City</h2>
                <div className='resultsContent'>
                    <ul>
                        <li className='eachResult'>
                            <h4>Toronto Roller Derby</h4>
                            <ul className='flexList'>
                                <li><span className='infoTitle'>Type of Skate: </span> Roller derby practice</li>
                                <li><span className='infoTitle'>Date: </span>12-22-2019</li>
                                <li><span className='infoTitle'>Time: </span>10am to 2pm </li>
                                <li><span className='infoTitle'>Address: </span>75 Carl Hall Road Unit 15 Toronto, ON M4S2T5</li>
                                <li><span className='infoTitle'>Cost: </span> $0</li>
                                <li><span className='infoTitle'>Notes: </span>Bring valid insurance as well as black and white</li>
                            </ul>
                            <button>Contact</button>
                        </li>
                        <li className='eachResult'>
                            <h4>Toronto Roller Derby</h4>
                            <ul className='flexList'>
                                <li><span className='infoTitle'>Type of Skate: </span> Roller derby practice</li>
                                <li><span className='infoTitle'>Date: </span>12-22-2019</li>
                                <li><span className='infoTitle'>Time: </span>10am to 2pm </li>
                                <li><span className='infoTitle'>Address: </span>75 Carl Hall Road Unit 15 Toronto, ON M4S2T5</li>
                                <li><span className='infoTitle'>Cost: </span> $0</li>
                                <li><span className='infoTitle'>Notes: </span>Bring valid insurance as well as black and white</li>
                            </ul>
                            <button>Contact</button>
                        </li>
                        <li className='eachResult'>
                            <h4>Toronto Roller Derby</h4>
                            <ul className='flexList'>
                                <li><span className='infoTitle'>Type of Skate: </span> Roller derby practice</li>
                                <li><span className='infoTitle'>Date: </span>12-22-2019</li>
                                <li><span className='infoTitle'>Time: </span>10am to 2pm </li>
                                <li><span className='infoTitle'>Address: </span>75 Carl Hall Road Unit 15 Toronto, ON M4S2T5</li>
                                <li><span className='infoTitle'>Cost: </span> $0</li>
                                <li><span className='infoTitle'>Notes: </span>Bring valid insurance as well as black and white</li>
                            </ul>
                            <button>Contact</button>
                    
                        </li>
                    </ul>
                </div>
                <button onClick={this.props.resetForm} className='resetForm'>Return to Search</button>
            </div>
        )
    }
}
export default Results;