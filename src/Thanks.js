import React, { Component } from 'react';

class Thanks extends Component {
    render () {
        return (
            <div id='thanksPopup' className='thanksPopup'>
                <h2>Thanks for adding your event!</h2>
                <button onClick={this.props.resetForm} className='addAnother'>Add Another?</button>
            </div>
        )
    }
}

export default Thanks;