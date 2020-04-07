import React from 'react';

function Header() {
    return(
        <div style={{
            gridArea: 'header',
            outlineStyle : 'solid', 
            outlineColor:'black',
            backgroundColor: 'lightGreen',
            height: '60px',
            width: '100%',
            textAlign: 'center'
        }}>
            <h1>My Header</h1>
        </div>
    );
}

export default Header;