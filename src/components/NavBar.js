import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function NavBar (){
    return(
        
        <header className="main-header">
        <div className="navbar">
          <li><Button variant="text">VEGAN FOX</Button></li>
          <li><Button variant="contained">Inicio</Button></li>
          <li><Button variant="contained">Menu</Button></li>
          <li><Button variant="contained">Pedidos</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
        </div>
        </header>
    

    )

}

export default NavBar