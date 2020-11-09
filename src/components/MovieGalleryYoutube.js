import React from 'react'

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-100px',
    marginBottom: '200px'
};

export default function MovieGalleryYoutube() {
    return (
        <>
            <div style={style}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SKcZk_R4xz4"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/yMTEPejzEgM" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div style={style}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ngVqQQrCqLg" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zJloSrNWtyc" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}
