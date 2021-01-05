import React, { useState } from "react";
import "./SearchPage.css";
import {useStateValue} from './StateProvider'
import useGoogleSearch from "./useGoogleSearch";
import Response from './Response'
import { Link } from "react-router-dom";
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE DATA
  // const {data} = useGoogleSearch(term) 

  const data = Response;


  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage__header">
       <Link to='/'>
         <img className='searchPage__logo' src="/images/rainbow1.png" alt=""/>
       </Link>
      <div className='searchPage__headerBody'>
        <Search hideButtons/>
        <div className='searchPage__options'>
          <div className='searchPage__optionsLeft'> 

            <div className='searchPage__option'>
              <SearchIcon/>
              <Link to='/all'>ALL</Link>
            </div>
            <div className='searchPage__option'>
              <DescriptionIcon/>
              <Link to='/news'>NEWS</Link>
            </div>
            <div className='searchPage__option'>
              <ImageIcon/>
              <Link to='/images'>IMAGES</Link>
            </div>
            <div className='searchPage__option'>
              <LocalOfferIcon/>
              <Link to='/shopping'>SHOPPING</Link>
            </div>
            <div className='searchPage__option'>
              <RoomIcon/>
              <Link to='/maps'>MAPS</Link>
            </div>
            <div className='searchPage__option'>
              <MoreVertIcon/>
              <Link to='/more'>MORE</Link>
            </div>
          </div>

          <div className='searchPage__optionsRight'> 
            <div className='searchPage__option'>
              <Link to='/settings'>Settings</Link>
            </div>

            <div className='searchPage__option'>
              <Link to='/tools'>Tools</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>


      <div className="searchPage__results">

      </div>
    </div>
  );
}
