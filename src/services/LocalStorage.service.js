

export const LocalStorage = {

    /**
     * Full storage setting of storage
     * @param {String} key 
     * @param {Object} data 
     * @param {String} type - the type of storage operation
     */

    setStorage(key, data, type){
        try{
            if (type === "local") {
                if (window?.localStorage) {
                    window.localStorage.setItem(key, JSON.stringify(data));
                }

            } else {
                if (window.sessionStorage) {
                    window.sessionStorage.setItem(key, JSON.stringify(data));
                }
            }

        }catch(err){}
    },

 

    /**
     * full service get storage
     * @param {String} key 
     */

    getStorage(key){
        try{
            if ( window?.localStorage ) {
                let stored = window.sessionStorage ? window.sessionStorage.getItem(key) : null;

                if ( !stored ) {
                    stored = window.localStorage ? window.localStorage.getItem(key) : {};
                }

                return stored !== "undefined" ? JSON.parse(stored) : {}
            }

        }catch(err){}
    },



    /**
     * Full service adding to existing storage
     * @param {String} key 
     * @param {Object} data 
     */

    addToStorage(key, data){
        try{
            let storedItems = this.getStorage(key);
            
            if (Array.isArray(storedItems)) {
                const newStoredItems = storedItems.filter(item => item.id !== data.id);

                newStoredItems.push(data);
                this.setStorage(key, newStoredItems, "local");

            } else {
                let arr = [];

                arr.push(data);
                this.setStorage(key, arr, "local");
            }

        }catch(err){
            console.log(err)
        }
    },




    /**
     * Remove an single item from an array in storage
     * @param {string} key 
     * @param {object} data 
     */

    removeFromStorage(key, data){
        try{
            let storedItems = this.getStorage(key);
            
            if (Array.isArray(storedItems)) {
                const newStoredItems = storedItems.filter(item => item.id !== data.id);
                this.setStorage(key, newStoredItems, "local");
            }

        }catch(err){
            console.log(err)
        }
    },


    

    /**
     * Clear out storage object of specified key
     * @param {string} key 
     */

    remove(key){
        try{
            if( window ){
                window.localStorage.removeItem(key)
                window.sessionStorage.removeItem(key)
            }
            
        }catch(err){}
    },


}