import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
    const[content, setContent] = useState('')
    return (
        <div>
            <ul>
                {
                    tabs.map(tab=><li onClick={()=>setContent(tab.content)} >{tab.title}</li>)
                }
            </ul>
            <p>{content}</p>
        </div>
    )
}

export default Tabs