const stateDefault = [
        { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
        { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
        { tabName: "tabShoes", showName: "Giày Dép", type: "shoes" },
        { tabName: "tabHandBags", showName: "Túi Xách", type: "handbags" },
        { tabName: "tabNecklaces", showName: "Dây Chuyền", type: "necklaces" },
        { tabName: "tabHairStyle", showName: "Kiểu Tóc", type: "hairstyle" },
        { tabName: "tabBackGround", showName: "Nền", type: "background" },
    ];


const CategoryReducer = (state = stateDefault , action) =>{
    switch (action.type){
        default :
        return state;
    }
}

export default CategoryReducer;

