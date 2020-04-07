import React from 'react';

const SideBar = () =>{
    return (
        <div style={{
            gridArea: 'side',
            outlineStyle : 'solid', 
            outlineColor:'black',
            backgroundColor: 'lightGreen',
            textAlign: 'center',
            alignItems:'center'

           }}
           >
  
                   <p>text</p>
                   <p>text</p>
                   <p>text</p>
                
                <h3>Sidebar</h3>
        </div>
    )
}

export default SideBar;