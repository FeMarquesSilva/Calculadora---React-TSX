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
        { id: 9, label: '1' },
        { id: 10, label: '2' },
        { id: 11, label: '3' },
        { id: 12, label: '+' },
        { id: 13, label: '-' },
        { id: 14, label: '0' },
        { id: 15, label: '00' },
        { id: 16, label: '.' },
        { id: 17, label: '=' },
        { id: 18, label: 'CLEAR' },
    ]

    return (
        <div>
            <header>
                <h1>Calculadora TSX</h1>
            </header>
            <section className='calculadora-container'>
                <div className='visor-container'>

                </div>
                <div className='buttons-container'>
                    {buttons.map((item: buttonItem) => (
                        <button key={item.id}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )

}

