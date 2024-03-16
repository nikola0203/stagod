import React from 'react'

function Link(props) {
  const { href, name, target, ...rest } = props
  return (
    <a href={href} title={name} target={target} {...rest}>
      {name}
    </a>
  )
}

export default Link