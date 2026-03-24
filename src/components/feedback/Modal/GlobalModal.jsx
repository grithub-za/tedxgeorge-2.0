"use client"

import { useContext } from "react";
import Modal from ".";
import { GlobalContext } from "@/contexts/GlobalContext";


function GlobalModal(){
    const [ global, dispatch ] = useContext(GlobalContext)

    return(
        <Modal 
            size="md"
            shouldOpen={global.modal.isOpen}
            willClose={() => dispatch({ 
                type: "openModal",
                data: {
                    isOpen: false,
                    title: null,
                    content: null
                }
            })}
            heading={global.modal.title}
        >
            {global.modal.content}
        </Modal>
    )
}

export default GlobalModal;