import {  useEffect, useState } from "react";
import { Navbar as NavbarBs , Nav } from "react-bootstrap"
import Container from "react-bootstrap/esm/Container"

export function Navbar(){

    const [ url , setUrl ] = useState(() => {
        return window.location.href;
    });

    function handleFragment( target : string ){
        window.location.href = `/${target}`;
        setUrl(window.location.href);
    }

    return (
        <NavbarBs id="navbar" fixed="top">
          <Container className="mx-auto d-flex justify-content-center align-items-center">
                <Nav id='nav' className="gap-5">
                    <a onClick={() => handleFragment('#home')} className={ (!url.includes('#about') && !url.includes('#project')) ? 'thm' : '' } >Home</a>
                    <a onClick={() => handleFragment('#about')} className={ url.includes('#about') ? 'thm' : '' } >About</a>
                    <a onClick={() => handleFragment('#projects')} className={ url.includes('#project') ? 'thm' : '' }>Projects</a>
                </Nav>
          </Container>
        </NavbarBs>
    )
}