import React from 'react';
import Square from './Square';

function Body() {
    return(
        <div style={{
            gridArea: 'body',
            outlineStyle : 'solid', 
            outlineColor:'black',
            backgroundColor: 'lightGreen',
            textAlign: 'center',
        }} className="body">
        <div style={{
            gridArea: 'img'
         }}>
            <img src="/logo192.png" alt="" style={{
               maxWidth: '300px'
            }}/>
         </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus pulvinar, venenatis mauris ut, ullamcorper nulla. Morbi volutpat risus risus, vel eleifend risus maximus nec.</p>
        <Square />
        <Square />
        <Square />
        </div>

    );
}

export default Body;