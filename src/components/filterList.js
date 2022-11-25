import items from '../BakeryData.json'

export default function filterList(arr, method) {
    if (method == null) return items;

    else {
        return items.filter(product => {
            const typeList = product.Types.split(" ");
            // console.log(typeList);
            if (arr.length > 0) {
                if (typeList.some(t => arr.indexOf(t) >= 0)) {
                    return product;
                }
            }
            else {
                return items;
            }
        })
    }
}

