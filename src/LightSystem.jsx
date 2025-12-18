import React, { useState } from "react"

function LightSystem() {
  const [active, setActive] = useState([])

  const handleClick = (i) => {
    if (active.includes(i)) return

    const updated = [...active, i]
    setActive(updated)

    if (updated.length === 8) {
      let stack = [...updated]

      const interval = setInterval(() => {
        stack.pop()
        setActive([...stack])

        if (stack.length === 0) {
          clearInterval(interval)
        }
      }, 500)
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "10px",
      }}
    >
      {Array.from({ length: 9 }).map((_, index) => {
        if (index === 4) {
          return <div key={index} style={{ width: "80px", height: "80px" }} />
        }

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              border: "2px solid black",
              backgroundColor: active.includes(index)
                ? "red"
                : "white",
            }}
          />
        )
      })}
    </div>
  )
}

export default LightSystem
