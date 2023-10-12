
export const getAllProducts = async () => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product`, {
        cache: "no-store"
    })
    if(!response.ok){
           throw new Error("Failed");
    }
    return response.json()
}

export const getAllProductsByCat = async (category:string) => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product?cat=${category}`, {
        cache: "no-store"
    })
    if(!response.ok){
        throw new Error("Failed");
    }
    return response.json()
}