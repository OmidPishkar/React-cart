const generateId = () => {
    return ([1e2]+-1e2).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0]).toString(16)
    ) 
}

export default generateId