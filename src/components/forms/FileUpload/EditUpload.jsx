import EditMenuItem from 'components/display/EditMenuBtn/EditMenuItem';
import EditMenuBtn from 'components/display/EditMenuBtn';
import { useContext } from 'react';



function EditUpload({ index, context, contextKey }){
    const [ global, dispatch ] = useContext(context)

    return(
        <EditMenuBtn>
            <EditMenuItem onClick={() => dispatch({ type: contextKey, data: index })}>
                Remove
            </EditMenuItem>
        </EditMenuBtn>
    )
}

export default EditUpload;