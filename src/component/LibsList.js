import React from 'react'
import Lib from './Libs.js'

const LibsList = ({libs}) => {

    return (
        <div className="Listlab" id="blog">
            <div className="title-libs">المختبرات</div>
        <div className="libs  row">
            {libs.map((lib) => (
                <Lib lib={lib} title={lib.title} body={lib.body} />
            ))}
        </div>
        </div>
    )
}

export default LibsList
