import React, { useState, useRef, useEffect } from 'react';
import "./Header.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IconButton, Badge } from '@material-ui/core';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
// import { AiOutLineClose } from "react-icons/bi";
const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
    },
    {
      id: 2,
      url: '/AboutUs',
      text: 'About Us',
    },
    {
      id: 3,
      url: '/Store',
      text: 'Store',
    },
    {
      id: 4,
      url: '/NewFasion',
      text: 'NewFasion',
    },
    // {
    //   id:5,
    //   url: '/',
    //   text: '',
    // },
    {
      id: 6,
      url: '/ContactUs',
      text: 'Contact Us',
    },
  ]

  export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <FaGithub />,
    },
  ];

export default function Header( {totalItems} ) {

    const location = useLocation();

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);

    
    return (
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <h3 className="logo">Creative Power Dev</h3>
            <button className='nav-toggle' onClick={toggleLinks}>
              <BiMenuAltRight />
            </button>
          </div>
          <div className='links-container' component={Link} to="/" ref={linksContainerRef}>
            <ul  className='links' ref={linksRef} >
              {links.map((link) => {
                const { id,url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
          <div className='button'>
          </div>
          {location.pathname === "/" &&  (
          <div className='shopping'>
            <IconButton component={Link} to="/cart" aria-label='show cart items' color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <FaShoppingCart color="#fff"/>
            </Badge>
            </IconButton>
          </div>
          )}
        <div className='grow'>
        </div>
        </div>
      </nav>
  )
}
