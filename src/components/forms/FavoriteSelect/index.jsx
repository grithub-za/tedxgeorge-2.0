/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';


import { useRouter } from "next/router";
import Favorites from "components/forms/Favorites";
import Utils from "@/styles/globals/utils.module.scss"
import Style from './FavoriteSelect.module.scss';
import { GetWishlists, AddProductsToWishlist } from 'services/myaccount/AuthContext.service';
import Link from 'next/link';


const FavoriteSelect = React.forwardRef(({ 
    authData,
    error, 
    label, 
    required, 
    disabled, 
    value, 
    children, 
    helpText, 
    show,
    productId,
    onChange,
    className,
    name,
    color
}, ref) => {

    const router = useRouter()
    const [ newValue, setValue ] = useState()
    const [ myLists, setMyLists ] = useState(false);
    const [ showFavoriteSelect, setShowFavoriteSelect ] = useState(false)
    const [ showLists, setShowLists ] = useState(true)

    useEffect(() => {
        if( value ){
            setValue(value)
        }

    }, [value])



    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const favoriteList = params.get('favoriteList');

        if( favoriteList ){
            setShowFavoriteSelect(true);
        }

        if(authData){
            GetWishlists(authData).then(data => {
                setMyLists(data.data.data);

            }).catch(err => {
                console.log(err)
            });
        }

    }, [])



    const toggleListsOrLogin = () => {

        if( !authData ){
            window.location  = `/login?return=${router.asPath}?favoriteList=true`
        
        }else{
            if(!showFavoriteSelect){
                setShowLists(true);
            }

            setShowFavoriteSelect(!showFavoriteSelect);
        }
    }



    const toastProductAddedToList = (listId) => (
        <>
            <p>Product Added To List</p>

            <Link href={"/account/lists/edit?list_id="+listId} title="View my list">
                
                    Go to the list
                
            </Link>
        </>
    );



    const favoriteListChanged = (e, productId) => {
        const selected = e.target;
        const listId = selected.value;

        if(listId == 'create_new_list'){
            window.location  = `/account/lists/create/`;
        }
        else if( !isNaN(listId) ){
            AddProductsToWishlist(authData, listId, {product_ids: [productId]}).then(async data => {
                const reactToast = await import("react-toastify");
                reactToast.toast(toastProductAddedToList(listId))

                setShowFavoriteSelect(false)
                setShowLists(false)

            }).catch(data => {
                if( data.response && data.response.data.errors ){
                    const errors = data.response.data.errors;
                    const errors_keys = Object.keys(errors);

                    errors_keys.map(async key => {
                        const reactToast = await import("react-toastify");
                        reactToast.toast.error(errors[key][0]);
                    })
                }
            });
        }
    }



    return(
        <>
            <Favorites 
                isLarge
                className={Utils.ms_2} 
                handleClick={() => toggleListsOrLogin()}
            />

            <div className={clsx(Style.block, color && Style[`block__${color?.class ?? color}`], showFavoriteSelect ? Style.show : Style.hide)}>
                <label 
                    className={clsx(
                        Style.label, 
                        error && Style.error__label, 
                        color && Style[`label__${color?.class ?? color}`]
                    )}
                >
                    {label}
                </label>

                <div className={Style.controlGroup}>
                    <select
                        ref={ref}
                        className={clsx(Style.control, error && Style.error__control, className, color && Style[`control__${color?.class ?? color}`])} 
                        required={required}
                        disabled={disabled}
                        onChange={(e) => favoriteListChanged(e, productId)}
                        value={newValue}
                        name={productId}
                    >
                        <option defaultValue>
                            Select a list
                        </option>

                        {showLists && myLists.length > 0 && myLists.map((list) => {
                            return <option key={list.id} value={list.id}>{list.name}</option>
                        })}

                        {showLists && myLists.length == 0 ? 
                            <option key="create_new_list" value="create_new_list">Create New List</option>
                        :null}
                    </select>
                </div>

                {helpText &&
                    <small className={clsx(Style.help, error && Style.error__help)}>
                        {helpText}
                    </small>
                }
            </div>
        </>
    )
})



FavoriteSelect.displayName = "FavoriteSelect";

FavoriteSelect.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    error: PropTypes.bool,
    authData: PropTypes.any,
    productId: PropTypes.number,
    value: PropTypes.any,
    show: PropTypes.bool,
    className: PropTypes.string
}


export default FavoriteSelect;