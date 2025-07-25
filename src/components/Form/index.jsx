import { useState } from "react"

function Form({ setImc, setClassif }) {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const calcularImc = (e) => {
        e.preventDefault()

        const alturaMetros = altura / 100
        const imc = peso / (alturaMetros * alturaMetros)
        const imcFinal = imc.toFixed(2)
        setImc(imcFinal)

        let classificação = ''
        if (imcFinal < 18.5) classificação = 'Magreza'
        else if (imcFinal < 24.9) classificação = 'Normal'
        else if (imcFinal < 29.9) classificação = 'Sobrepeso'
        else if (imcFinal < 39.9) classificação = 'Obesidade grau 2'
        else classificação = 'Obesidade grave'
        setClassif(classificação)

        if (altura > 250 || altura < 100 || peso > 600 || peso < 10) {
            alert ("Por favor, digite dados reais.")
            setImc(null)
        } return
    }

    return (
        <>
            <div className="max-w-lg mx-auto items-center p-10 m-5 rounded-4xl border-1 border-solid border-sky-200 bg-sky-50 shadow-xl">
                <div className="flex items-center justify-center">
                    <header className="p-8">
                        <h1 className="text-3xl text-slate-700 font-bold uppercase">Calculadora de IMC</h1>
                    </header>
                </div>

                <form className="flex flex-col gap-5 items-center" onSubmit={calcularImc}>
                    <h3 className="text-2xl text-slate-700 pb-3">Seu gênero:</h3>

                    <div className="flex gap-5 items-center text-slate-700">
                        <input className="accent-sky-700" type="radio" id="masculino" name="genero" />
                        <label htmlFor="masculino">Masculino</label>
                        <input className="accent-pink-700" type="radio" id="feminino" name="genero" />
                        <label htmlFor="feminino">Feminino</label>
                    </div>

                    <div className="flex flex-col items-center text-slate-700">
                        <label className="text-2xl pb-1" htmlFor="idade">Sua idade</label>
                        <p className="text-sm pb-3 text-slate-700">(números)</p>
                        <input className="p-1 font-bold text-sky-700 text-center border border-sky-700 rounded-lg focus:outline-sky-700 focus:text-sky-700" type="number" id="idade" required min={1} max={99} />
                    </div>

                    <div className="flex flex-col items-center text-slate-700">
                        <label className="text-2xl pb-1" htmlFor="altura">Sua altura</label>
                        <p className="text-sm pb-3 text-slate-700">(em centímetros)</p>
                        <input className="p-1 font-bold text-sky-700 text-center border border-sky-700 rounded-lg focus:outline-sky-700 focus:text-sky-700" type="number" id="altura" required min={1} onChange={(e) => setAltura(parseInt(e.target.value))} />
                    </div>

                    <div className="flex flex-col items-center text-slate-700">
                        <label className="text-2xl pb-1" htmlFor="peso">Seu peso</label>
                        <p className="text-sm pb-3 text-slate-700">(em quilogramas)</p>
                        <input className="p-1 font-bold text-sky-700 text-center border border-sky-700 rounded-lg focus:outline-sky-700 focus:text-sky-700" type="number" id="peso" required min={1} onChange={(e) => setPeso(parseInt(e.target.value))} />
                    </div>

                    <button className="p-2 pr-4 pl-4 bg-sky-700 rounded-lg text-sky-50 font-bold uppercase cursor-pointer hover:bg-slate-700" type="submit">Calcular</button>
                    <p className="text-sm pb-3 text-slate-700">Após clicar, role para baixo para ver o resultado.</p>
                </form>
            </div>
        </>
    )
}

export default Form