function Results({ imc, classif }) {
    if (!imc) return null

    return (
        <>
            <div className="max-w-lg mx-auto items-center p-10 m-5 rounded-4xl border-1 border-solid border-sky-200 bg-sky-50 shadow-xl">
                <div className="flex flex-col items-center">
                    <h2 className="pt-12 text-2xl text-slate-700 mb-3">Seu IMC é:</h2>
                    <span className="pb-3 pt-2 pr-4 pl-4 text-3xl text-slate-700 font-bold uppercase bg-sky-200 rounded-lg">{imc}</span>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="pt-7 text-2xl text-slate-700 mb-3">Classificação:</h2>
                    <span className="pb-3 pt-2 pr-4 pl-4 text-3xl text-slate-700 font-bold uppercase bg-sky-200 rounded-lg">{classif}</span>
                </div>

                <div className="mt-7">
                    <h2 className="pt-7 pb-7 text-2xl text-center font-bold text-slate-700">Interpretação:</h2>
                </div>
                <div className="pb-7 flex items-center justify-center gap-10">
                    <div className="flex flex-col items-start">
                        <h3 className="mb-2 text-sm font-bold text-sky-700">IMC</h3>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Menor que 18,5</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Entre 18,5 e 24,9</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Entre 25,0 e 29,9</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Entre 30,0 e 39,9</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Maior que 40,0</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="mb-2 text-sm font-bold text-sky-700">Classificação</h3>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Magreza</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Normal</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Sobrepeso</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Obesidade</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">Obesidade grave</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="mb-2 text-sm font-bold text-sky-700">Obesidade (grau)</h3>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">0</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">0</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">1</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">2</p>
                        <p className="pt-1 pb-1 text-sm font-medium text-slate-700">3</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Results