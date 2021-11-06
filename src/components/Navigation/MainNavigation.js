import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import '../../styles/components/Navigation/MainNavigation.css'
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from "../UI/Backdrop";

const MainNavigation = () => {
    const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false)

    const openSideDrawerHandler = () => {
        setSideDrawerIsOpen(true)
    }

    const closeSideDrawerHandler = () => {
        setSideDrawerIsOpen(false)
    }

    return (
        <>
            { sideDrawerIsOpen && <Backdrop onClick={closeSideDrawerHandler}/> }
            <SideDrawer show={sideDrawerIsOpen} onClick={closeSideDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={() => openSideDrawerHandler()}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>

    )
}

export default MainNavigation