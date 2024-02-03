import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>  
      <ul className="footer__categories">
        <li><Link to="/posts/categories/:Cafe">Cafe</Link></li> 
        <li><Link to="/posts/categories/:Tourist Spots">Tourist Spots</Link></li> 
        <li><Link to="/posts/categories/:City Lights">City Lights</Link></li>       
        <li><Link to="/posts/categories/:Hiking">Hiking</Link></li> 
        <li><Link to="/posts/categories/:Beach">Beach</Link></li>
        <li><Link to="/posts/categories/:Musem">Musem</Link></li>  
         
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Jkelsy Tutorials.</small>
      </div>
    </footer>
  )
}

export default Footer