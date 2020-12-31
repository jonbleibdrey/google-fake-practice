import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button }  from '@material-ui/core'

export default function Search() {

    const [input, setInput] = useState("");


    const search = e => {
        e.preventDefault();
    } 

    return (
        <div className='search'>
            <div className="search__input">
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            <div className="search__buttons">
                <Button onClick={search} variant="outlined"> Google Search</Button>
                <Button variant="outlined">feeling lucky?</Button>
            </div>

        </div>
    )
}
