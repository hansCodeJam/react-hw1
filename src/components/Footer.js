import React from 'react';

function Footer() {
    return(
        <div style={{
            gridArea: 'footer',
            outlineStyle : 'solid', 
            outlineColor:'black',
            backgroundColor: 'lightGreen',
            height: '60px',
            width: '100%',
            textAlign: 'center',
            display: 'Flex'
        }}>
            <h1>Copyright © 2020 Hans</h1>
        </div>
        
    );
}

export default Footer;