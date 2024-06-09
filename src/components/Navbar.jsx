import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <>
    <nav class="navbar">
        <div class="logo">
            <a href="index.html">The Lapin Agency</a>
        </div>
        <ul class="nav-links">
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="actors.html">Actors</a></li>
            <li><a href="models.html">Models</a></li>
            <li><a href="child-artists.html">Child Artists</a></li>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="success.html">Success</a></li>
            <li><a href="shortlist.html">My Shortlist (0)</a></li>
        </ul>
        <div class="search-bar">
            <input type="text" placeholder="Search for Artists & Auditions"/>
            <button><i class="fas fa-search"></i></button>
        </div>
    </nav>

    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    </>
  )
}

export default Navbar