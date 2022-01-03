const Reducer = (cart=[], action) => { 
    let quantity = 1;
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
    return cart;
}
export default Reducer;