import React from 'react'

const Content = () => {
    const Namechange = () => {
        const names = ["broke", "fake brokey", "very money", "somewhat money"];
        const random = Math.floor(Math.random() * names.length);
        return names[random];
    }
  return (
    <div>
        <p>im {Namechange()}</p>
    </div>
  )
}

export default Content