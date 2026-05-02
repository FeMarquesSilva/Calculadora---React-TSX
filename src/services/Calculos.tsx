export const somar = ( vlrUm: number, vlrDois: number) => {
    return (vlrUm + vlrDois)
}

export const subtrair = ( vlrUm: number, vlrDois: number) => {
    return (vlrUm - vlrDois)
}

export const multiplicar = ( vlrUm: number, vlrDois: number) => {
    return (vlrUm * vlrDois)
}

export const dividir = ( vlrUm: number, vlrDois: number) => {
    if (vlrDois === 0) return null

    return (vlrUm / vlrDois)
}