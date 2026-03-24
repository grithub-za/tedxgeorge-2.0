"use client"

import React, { useEffect, useRef, useState } from 'react';
import Style from './AutoSignatureCanvas.module.scss';
import clsx from 'clsx';


const AutoSignatureCanvas = React.forwardRef(({ name="John Doe" }, ref ) => {
    const canvasRef = useRef(null);
    const [ text, setText ] = useState(name);
    const [ context, setContext ] = useState(null);

    useEffect(() => {
        if( !canvasRef.current ) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        ctx.font = "40px Bradley Hand";
        ctx.imageSmoothingQuality = "high";
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
       
        setContext(ctx);

    }, [ canvasRef.current ]);



    useEffect(() => {
        if( text && context ){
            context.clearRect(0, 0, 400, 100)
            context.fillText(text, 20, 60);
        }

    }, [ text, context ]);


    return(
        <section className={Style.container}>
            <canvas 
                id="signatureCanvas"
                className={clsx(Style.block)}
                width="600"
                height="100"
                ref={(node) => {
                    canvasRef.current = node;

                    if (typeof ref === 'function') {
                        ref(node);

                    } else if (ref) {
                        ref.current = node;
                    }
                }}
            />

            {/* <input 
                type="text" 
                value={text} 
                className={Style.control} 
                onChange={(e) => setText(e.target.value)}
            /> */}
        </section>
    )
})

AutoSignatureCanvas.displayName = 'AutoSignatureCanvas';

export default AutoSignatureCanvas;