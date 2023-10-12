
export const getAllCategories = async () => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
        cache: "no-store"
    })
    if(!response.ok){
        throw new Error("Failed");
    }
    return response.json()
}