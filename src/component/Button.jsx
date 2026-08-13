function Button({id, title, leftIcon, containerClass}) {
  return (
    <>
      <button id={id} className={`group relative z-10 cursor-pointer overflow-hidden rounded-full
       px-7 py-3 text-black ${containerClass}`}
      >
        {leftIcon}
        <span
          className="relative incline-flex overflow-hidden font-general text-xs uppercase"
        > {title}</span>

      </button>
    </>
  )
}

export default Button
