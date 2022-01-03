const Reducer = (cart=[], action) => { 
    if(action.type === "ADD"){
        let tempcart=cart.filter((product)=>product.id_product===action.payload.id_product)
        console.log(action.payload.id_product)
        if(tempcart < 1){
            return[...cart, action.payload]
        }else{
            return cart;
        }
    }
    if(action.type === "REMOVE"){
        return cart.filter((cart)=> cart.id_product!==action.payload.id_product)
    }
    if(action.type === "INCREASE"){
        let increse = cart.map((cart) => {
            if(cart.id_product===action.payload.id_product){
                return {...cart, quantity: cart.quantity+1}
            } return cart
        })
        return increse;
    }
    if(action.type === "DECREASE"){
        let decrease = cart.map((cart) => {
            if(cart.id_product===action.payload.id_product){
                return {...cart, quantity: cart.quantity-1}
            } return cart
        })
        return decrease;
    }
    return cart;
}
export default Reducer;