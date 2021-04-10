import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import '../../App.css'

function Nav() {
    return (
        <div className={`nav ${'nav-active'}`}> 
            {
                data.map((link, id) => {
                    return <Link key={id} to={link.route}>
                        {link.name}
                    </Link>
                })
                }
        </div>
    )
}

export default Nav;