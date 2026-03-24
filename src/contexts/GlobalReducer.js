/**
*   Global State Manager:
*   - only put things in here that are truly global (e.g. Cart & Customer Data, Theme)
*   otherwise make it a local state or pass it in a prop
*/

// use our initial state as a type of manifest for the Global State
export const initialState = {
    nav:{
        isOpen: false
    },
    user: {
        isLoggedIn: false,
        email: "",
        customer_group_id: 5,
    },
    widget: {
        isOpen: true,
        component: null,
    },
    modal: {
        isOpen: false,
        title: "",
        content: null
    },
    cart: {
        total: 0,
        lineItems: [],
        editTicket: null
    },
    thirdParty: {}
}


export const GlobalReducer = (state, action) => {
    switch(action.type){
        
        case "editTicket":
            let newTicketCart = { ...state.cart }
            const ticketData = newTicketCart.lineItems.find(item => item.id === action.data.id)

            const ticket = {
                ...ticketData,
                ...action.data
            }

            return{
                ...state,
                cart: {
                    ...state.cart,
                    lineItems: state.cart.lineItems.map(item => {
                        if (item.id === ticket.id) {
                            return ticket
                        }

                        return item
                    }),
                    editTicket: ticket
                }
            }



        case "toggleNav":
            return{
                ...state,
                nav: {
                    isOpen: action?.data ?? !state.nav.isOpen
                }
            }


        case "setCart":
            return{
                ...state,
                cart: action.data
            }



        case "updateCart":
            const newCart = { ...state.cart }

            newCart.lineItems = newCart.lineItems.map(item => {
                if (item.type === action.data.type) {
                    return {
                        ...item,
                        quantity: action.data.quantity,
                        price: action.data.price
                    }
                }

                return item
            })

            newCart.total = newCart.lineItems.reduce((acc, item) => acc + item.price, 0)

            return{
                ...state,
                cart: newCart
            }

            

        case "addToCart":
            return{
                ...state,
                cart: {
                    ...state.cart,
                    total: state.cart.total + action.data.price,
                    lineItems: [
                        ...state.cart.lineItems,
                        action.data
                    ]
                }
                
            }

        
        case "openModal":
            return{
                ...state,
                modal: action.data
            }


        case "setWidget":
            return{
                ...state,
                widget: action.data
            };
        

        default:
            throw new Error("Doh! You did not choose GlobalReducer method type to perform. Please try agin or go to GlobalContext.js for available types.")
    }
};
