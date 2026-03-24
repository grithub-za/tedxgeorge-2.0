import PropTypes from 'prop-types';
import RenderForm from "components/blocks/RenderForm";
import Loader from "components/feedback/Loader";
import { GetFreeForm } from "contexts/FormContext";
import clsx from 'clsx';

import Utils from "@/styles/globals/utils.module.scss"

function FreeForm({ 
    onSuccess = () => null,
    onFailure = () => null,
    handle, 
    hideLegend, 
    fullWidthForm, 
    formClass, 
    legendClass, 
    noPad,
    controlData 
}){
    const form = GetFreeForm(handle);


    if( form.isLoading ){
        return (
            <div className={clsx(Utils.d_flex, Utils.h_100, Utils.w_100, Utils.p_10, Utils.justify_content_center, Utils.align_items_center)}>
                <Loader />
            </div>
        )
    }

    if( form.isError ){
        return null;
    }

    return (
        <RenderForm 
            formControl={form?.data}
            {...{ 
                hideLegend, 
                fullWidthForm, 
                formClass, 
                legendClass, 
                noPad, 
                onSuccess,
                onFailure,
                controlData 
            }}
        />
    )
}


FreeForm.propTypes = {
    handle: PropTypes.string
}


export default FreeForm;