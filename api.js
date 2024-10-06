export async function getVans(){
    const res = await fetch("/api/vans")
    if(!res.ok){  // res.ok is built into fetch. If it is NOT ok, it will throw a 400 or 500 level response code
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}