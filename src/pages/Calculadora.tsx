import '../styles/calculadora.css'
import type { buttonItem } from '../interfaces/Calculadora'
import { useState } from 'react'
import { dividir, multiplicar, somar, subtrair } from '../services/Calculos'

export const Calculadora = () => {

    const [visor, setVisor] = useState('')
    const [oper, setOper] = useState('')
    const [vlrUm, setVlrUM] = useState('')
    const [vlrDois, setVlrDois] = useState('')

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
        setVlrUM('')
        setVlrDois('')
        return
    }

    const realizarCalculo = (primeiroVlr: number, segundoVlr: number) => {
        let valor: string
        console.log('Aqui')
        if (oper === '+') {
            valor = String(
                somar(
                    Number(primeiroVlr),
                    Number(segundoVlr)
                )
            )
            setOper('')
            setVlrUM(valor)
            return valor
        } else if (oper === '-') {
            valor = String(
                subtrair(
                    Number(primeiroVlr),
                    Number(segundoVlr)
                )
            )
            setOper('')
            setVlrUM(valor)
            return valor
        } else if (oper === '*') {
            valor = String(
                multiplicar(
                    Number(primeiroVlr),
                    Number(segundoVlr)
                )
            )
            setOper('')
            setVlrUM(valor)
            return valor
        } else {
            valor  = String(
                dividir(
                    Number(primeiroVlr),
                    Number(segundoVlr)
                )
            )
            setOper('')
            setVlrUM(valor)
            return valor
        }
    }

    const validarValor = (valor: string) => {
        let newValor: string

        //Definindo os operadores
        if (valor === '+') {
            setVisor('')
            setOper('+')
            return
        } else if (valor === '-') {
            setVisor('')
            setOper('-')
            return
        } else if (valor === 'X') {
            setVisor('')
            setOper('*')
            return
        } else if (valor === '/') {
            setVisor('')
            setOper('/')
            return
        }

        //Função de Clear;
        if (valor === 'CLEAR') {
            limpar()
            return
        }

        // Função de DEL
        if (valor === 'DEL') {
            if (visor.length === 1) {
                limpar()
                return
            } else {
                newValor = visor.slice(0, -1)
                setVisor(newValor)
                if (oper === '') {
                    setVlrUM(newValor)
                } else {
                    setVlrDois(newValor)
                }
                return
            }
        }

        //Se não for nenhuma função mas sim o primeiro digito, exibo ele no visor apenas e salvo no calc.
        if (visor === '' && oper === '') {
            setVisor(valor)
            setVlrUM(valor)
            return
        }

        if (valor !== '='){
            if (oper === '') {
                setVisor((prev) => prev + valor)
                setVlrUM((prev) => prev + valor)
            } else {
                setVisor((prev) => prev + valor)
                setVlrDois((prev) => prev + valor)
            }
        }

        if (valor === '=') {
            console.log("aaqqq", vlrUm, vlrDois)
            if (vlrUm === '' || vlrDois === '') return
            setVisor(realizarCalculo(Number(vlrUm), Number(vlrDois)))
            setVlrDois('')
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
                        <button onClick={() => validarValor(item.label)} className='buttons' key={item.id}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )

}

