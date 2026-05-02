import '../styles/calculadora.css'

interface buttonItem {
    id: number,
    label: string
}

export const Calculadora = () => {

    const buttons = [
        { id: 1, label: '7' },
        { id: 2, label: '8' },
        { id: 3, label: '9' },
        { id: 4, label: '%' },
        { id: 5, label: 'DEL' },
        { id: 6, label: '4' },
        { id: 7, label: '5' },
        { id: 8, label: '6' },
        { id: 9, label: 'X' },
        { id: 10, label: '/' },
        { id: 11, label: '1' },
        { id: 12, label: '2' },
        { id: 13, label: '3' },
        { id: 14, label: '+' },
        { id: 15, label: '-' },
        { id: 16, label: '0' },
        { id: 17, label: '00' },
        { id: 18, label: '.' },
        { id: 19, label: '=' },
        { id: 20, label: 'CLEAR' },
    ]

    return (
        <div className='container-all'>
            <header>
                <h1>Calculadora TSX</h1>
            </header>
            <section className='calculadora-container'>
                <div className='visor-container' id='visor' />
                <div className='buttons-container'>
                    {buttons.map((item: buttonItem) => (
                        <button className='buttons' key={item.id}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )

}

