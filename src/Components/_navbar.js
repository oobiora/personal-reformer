import React from 'react';
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

function NavBarComponent() {

    return (
        <nav className="navbar navbar-default text-light navbar-fixed navbar-transparent white bootsnav">
                    <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="fa fa-bars"></i> </button>
                        <a className="navbar-brand" href="index.html">
                        <img src="img/logo-white.png" className="logo logo-display" alt="Logo" />
                                <img src="img/logo-black.png" className="logo logo-scrolled" alt="Logo" />
                            </a>
                        </div>

                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav navbar-right" data-in="#" data-out="#">
                            
                        </ul> 
                    </div>
                    </div>
                </nav>
    )
}

export default NavBarComponent;