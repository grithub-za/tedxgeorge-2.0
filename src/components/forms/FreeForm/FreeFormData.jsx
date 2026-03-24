

const FreeFormData = React.forwardRef(({
    formControlData
}, ref ) => {

    return(
        <>
            <input type="hidden" {...register("formHash")} value={formControlData.data.hash} />
            <input type="hidden" {...register("action")} value={formControlData.data.action} />
            <input type="hidden" {...register(formControlData.data?.csrf?.name)} value={formControlData.data?.csrf?.token} />
            <input type="hidden" {...register("freeform-action")} value={formControlData.data.action} />
            <input type="hidden" {...register("id")} value={formControl.id} />
            <input type="hidden" {...register("freeform_payload")} value={formControlData.data.freeform_payload} />
            <input type="hidden" {...register("anchor")} value={formControlData.data.anchor} />
            <input type="hidden" {...register("freeform_form_handle")} value={formControl.handle} />
        </>
    )
})


FreeFormData.displayName = 'FreeFormData';


export default FreeFormData;