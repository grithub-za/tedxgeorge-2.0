/* eslint-disable react-hooks/exhaustive-deps */

import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Button from '../Button';

import Style from "./FileUpload.module.scss";
import FileTable from './FileTable';
import { toast } from 'react-toastify';
import Loader from 'components/feedback/Loader';

function FileUpload({ 
    acceptedText, 
    hideTable = false,
    maxFileSize = 5000000, 
    onSetFiles = () => null,
    isLoading = false,
    isDone = false,
    context,
    contextKey
}){
    const [ files, setFiles ] = useState([]);

    useEffect(() => {
        onSetFiles(files)

    }, [ files ])


    
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            if( file.size > maxFileSize ){
                toast.error("File size is too large.  Max file size is 5MB")
                return false;
            }

            setFiles([ ...files, file])
        })

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })



    return(
        <>
            {isLoading ? (
                <div className={clsx(Style.dropzone, Style.loader)}>
                    <Loader 
                        isLarge
                        isDark
                        isLoading={isLoading} 
                        isSuccessful={isDone}
                    />
                </div>
            ):(
                <div {...getRootProps()} className={clsx(Style.dropzone, isDragActive && Style.dropzoneActive )}>
                    <input {...getInputProps()} />

                    {isDragActive ? (
                        <p className={Style.dropzoneText}>
                            Drop file here ...
                        </p>
                    ):(
                        <div className={Style.dropzoneCntr}>
                            <div className={Style.dropzoneText}>
                                <svg id="icon-cloud_upload" viewBox="0 0 24 24" width="45" height="45">
                                    <path d="M14.016 12.984h3l-5.016-4.969-5.016 4.969h3v4.031h4.031v-4.031zM19.359 10.031c2.578 0.188 4.641 2.344 4.641 4.969 0 2.766-2.25 5.016-5.016 5.016h-12.984c-3.328 0-6-2.672-6-6 0-3.094 2.344-5.625 5.344-5.953 1.266-2.391 3.75-4.078 6.656-4.078 3.656 0 6.656 2.578 7.359 6.047z"></path>
                                </svg>
                                Drag 'n' drop a file here to upload
                            </div> 

                            <h4>- OR -</h4>
                            
                            <Button type="button" size="sm" variant="outline">
                                From computer
                            </Button>
                        </div>
                    )}
                </div>
            )}
            
            


            <small className={Style.dropzoneHelp}>
                {acceptedText}
            </small>


            {(!hideTable && context && contextKey) && (
                <FileTable 
                    files={files} 
                    context={context}
                    contextKey={contextKey}
                />
            )}
            
        </>
    )
}

export default FileUpload;