import React, { useState } from "react";
import "./SearchPage.css";
import {useStateValue} from './StateProvider'
import useGoogleSearch from "./useGoogleSearch";
import Response from './Response'
import { Link } from "react-router-dom";

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
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  );
}
