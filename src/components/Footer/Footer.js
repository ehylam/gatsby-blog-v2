import React from "react"

const Footer = data => {
  return (
    <footer>
      <div className="wrap">
        <div className="flex mb-4">
          <p>{data.footerTitle}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

