import React from 'react'


let styles = {
    textAlign: 'center',
    fontSize: '50px',
    marginTop: '50px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'rgba(218,218,218,.5)',
    userSelect: 'none',
}
class View extends React.Component {
    render() {
        return (
             <div style={styles}>
                 404
             </div>
        );
    }
}

export default View;