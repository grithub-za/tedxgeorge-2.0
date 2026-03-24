import Style from "./FileUpload.module.scss";
import Utils from "@/styles/globals/utils.module.scss"
import EditUpload from './EditUpload';
import toDateTimeFormat from 'lib/utils/toDateTimeFormat';
import clsx from "clsx";
import ErrorBoundary from "services/ErrorBoundary";


function FileTable({ files = [], context, contextKey }){
    return(
        <>
            {(Array.isArray(files) && files.length) ? (
                <div className={clsx(Utils.w_100, Utils.d_flex, Utils.flex_column)}>
                    <table className={Style.table}>
                        <thead>
                            <tr className={Style.row}>
                                <th className={Style.headerCell} style={{ width: "50px" }}>&nbsp;</th>
                                <th className={Style.headerCell}>Name</th>
                                <th className={Style.headerCell} style={{ width: "100px" }}>File Size</th>
                                <th className={Style.headerCell}>Last Modified</th>
                                <th className={Style.headerCell} style={{ width: "50px" }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            {files.map((file, i) => {
                                return(
                                    <tr className={Style.row} key={file.name +"_"+ i}>
                                        <td className={Style.cell}>
                                            <svg id="icon-insert_drive_file" viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M12.984 9h5.531l-5.531-5.484v5.484zM6 2.016h8.016l6 6v12c0 1.078-0.938 1.969-2.016 1.969h-12c-1.078 0-2.016-0.891-2.016-1.969l0.047-16.031c0-1.078 0.891-1.969 1.969-1.969z"></path>
                                            </svg>
                                        </td>
                                        <td className={Style.cell}>{file?.name}</td>
                                        <td className={Style.cell}>{file?.size/1000}kb</td>
                                        <td className={Style.cell}>{toDateTimeFormat(file?.lastModified)}</td>
                                        <td className={clsx(Style.cell, Style.editCell)}>
                                            <ErrorBoundary>
                                                <EditUpload index={file.name} {...{ context, contextKey }} />
                                            </ErrorBoundary>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ):null}
        </>
    )
}


export default FileTable;