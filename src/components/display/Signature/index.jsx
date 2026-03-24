import AutoSignatureCanvas from "@/components/display/Signature/AutoSignatureCanvas";
import { useRef, useState } from "react";
import SignatureCanvas from 'react-signature-canvas'
import Style from './Signature.module.scss';
import clsx from "clsx";
import Checkmark from "@/icons/Checkmark";



function Signature({ name, onSigned= () => null }){
    const sigCanvas = useRef()
    const autoSigCanvas = useRef()
    const autoDetailsRef = useRef()
    const manualDetailsRef = useRef()
    const [ signed, setSigned ] = useState(null)


    return(
        <div className={Style.block}>
            <details 
                name="signature" 
                open
                id="autoSignature" 
                ref={autoDetailsRef}
                // onToggle={(e) => console.log(e.target.open)}
            >
                <summary className={Style.summary}>
                    - Use - Your Auto Typed Signature
                </summary>

                <AutoSignatureCanvas 
                    ref={autoSigCanvas} 
                    name={name}
                    isActive={autoDetailsRef.current?.open}
                />

                <button 
                    type="button" 
                    className={Style.acceptBtn}
                    onClick={() => {
                        onSigned(autoSigCanvas.current.toDataURL("image/png").replace("image/png", "image/octet-stream"))
                        setSigned("autoSign")
                    }}
                >
                    {signed === "autoSign" && <Checkmark fill="#fff" className={Style.acceptBtnIcon} />}
                    I accept my signature
                </button>
            </details>
                

            <details 
                name="signature" 
                className={clsx(Style.controlGroup)} 
                id="manualSignature" 
                ref={manualDetailsRef}
                // onToggle={(e) => console.log(e.target.open)}
            >
                <summary className={Style.summary}>
                    - Or - Draw Your Signature  &nbsp; <small>(Use finger or mouse to sign here)</small>
                </summary>

                <SignatureCanvas 
                    penColor='blue'
                    backgroundColor="rgba(255, 255, 255)"
                    canvasProps={{ height: 250, className: Style.signatureCanvas}} 
                    ref={sigCanvas}
                />    

                <button 
                    type="button" 
                    className={Style.acceptBtn}
                    onClick={() => {
                        onSigned(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png").replace("image/png", "image/octet-stream"))
                        setSigned("manualSign")
                    }}
                >
                    {signed === "manualSign" && <Checkmark fill="#fff" className={Style.acceptBtnIcon} />}
                    I accept my signature
                </button>            
            </details>
        </div>
    )
}


export default Signature;
