function Label(props) {
  const { htmlFor, className, ...rest } = props

  return (
    <label htmlFor={htmlFor} className={className} {...rest}>
      {props.children}
    </label>
  )
}

export default Label