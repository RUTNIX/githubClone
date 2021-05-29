import React from 'react'
import './search.css'
import logo from './img/logoGit.png'

export default function Search({send, changeName , name}) {
    return (
        <div>
            <div className='header'>
                <img className='header-logo' src={logo} />

                <form onSubmit={send}>
                
                    <input
                    className='input'
                    value={name}
                    placeholder='enter name on github'
                    onChange = {(e)=>changeName(e.target.value)}
                    />
                
                </form>
            </div>    
        </div>
    )
}
