import React from 'react'

export default ({ height, width }) => (
  <svg className="crossbuck" width={width} viewBox="0 0 180 290" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" width="19" height="290" fill="#B6B6B6"/>
    <rect x="156.271" width="33" height="221" transform="rotate(45 156.271 0)" fill="white"/>
    <rect y="23.3345" width="33" height="221" transform="rotate(-45 0 23.3345)" fill="white"/>
    <rect x="65" y="230" width="49" height="13" fill="#C4C4C4"/>
    <circle cx="38.5" cy="236.5" r="35.5" fill="#1E1E1E"/>
    <circle cx="140.5" cy="236.5" r="35.5" fill="#1E1E1E"/>
    <circle cx="38.5" cy="236.5" r="26.5" fill="#FF4545"/>
    <circle cx="140.5" cy="236.5" r="26.5" fill="#FF4545"/>
  </svg>
)
