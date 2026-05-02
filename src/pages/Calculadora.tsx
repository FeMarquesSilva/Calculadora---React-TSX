import '../styles/calculadora.css'
import type { buttonItem } from '../interfaces/Calculadora'
import { use, useState } from 'react'
import { dividir, multiplicar, somar, subtrair } from '../services/Calculos'

export const Calculadora = () => {

    const [visor, setVisor] = useState('')
    const [calc, setCalc] = useState('')
    const [oper, setOper] = useState('')

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

    const limpar = () => {
        setVisor('')
        setOper('')
        setCalc('')
    }

    const realizarCalculo = (valor: string) => {
        let newValor: string


        if (valor === '+') {
            setOper('+')
            return
        } else if (valor === '-') {
            setOper('-')
            return
        } else if (valor === 'X') {
            setOper('*')
            return
        } else if (valor === '/') {
            setOper('/')
            return
        }

        if (valor === 'CLEAR') {
            limpar()
            return
        }

        if (valor === 'DEL') {
            if (visor.length === 1) {
                limpar()
                return
            } else {
                newValor = visor.slice(0, -1)
                setVisor(newValor)
                setCalc(newValor)
                return
            }
        }

        if (visor === '') {
            setVisor(valor)
            setCalc(valor)
            return
        }

        if (valor === '=') {
            setVisor(calc)
            return
        }

        if (oper === '+') {
            setCalc(String(
                somar(
                    Number(calc),
                    Number(valor)
                )
            ))
            setVisor(valor)
            return
        } else if (oper === '-') {
            setCalc(String(
                subtrair(
                    Number(calc),
                    Number(valor)
                )
            ))
            setVisor(valor)
            return
        } else if (oper === '*') {
            setCalc(String(
                multiplicar(
                    Number(calc),
                    Number(valor)
                )
            ))
            setVisor(valor)
            return
        } else {
            setCalc(String(
                dividir(
                    Number(calc),
                    Number(valor)
                )
            ))
            setVisor(valor)
            return
        }
    }

    return (
        <div className='container-all'>
            <header>
                <h1>Calculadora TSX</h1>
            </header>
            <section className='calculadora-container'>
                <div className='visor-container'>
                    {visor}
                </div>
                <div className='buttons-container'>
                    {buttons.map((item: buttonItem) => (
                        <button onClick={() => realizarCalculo(item.label)} className='buttons' key={item.id}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )

}

