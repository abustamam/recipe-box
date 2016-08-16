import React from 'react'

const Icon = ({ type, style = {} }) => {
  let icon
  const { width = 18, height = 18, fill = 'black' } = style
  switch (type) {
  case 'edit':
    icon = <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    break
  case 'add':
    icon = <path d="M0 10.5,10.5 10.5,10.5 0,13.5 0,13.5 10.5,24 10.5,24 13.5,13.5 13.5,13.5 24,10.5 24,10.5 13.5,0 13.5,0 10.5z" />
    break
  default:
    icon = <circle cx="12px" cy="12px" r="8px" />
    break
  }
  return (<svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
    {icon}
  </svg>
)}

export default Icon
