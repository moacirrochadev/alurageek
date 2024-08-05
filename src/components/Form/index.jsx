export function Form(){
    return (
      <div className=" w-[472px] text-center space-y-6">
        <h2 className="m-10 text-2xl leading-6">ADICIONAR PRODUTO:</h2>
        <form className="flex flex-col items-center space-y-4">
          <input
            className="w-[392px] h-14 placeholder:text-blue-700 border-2 border-blue-700 rounded-3xl p-4"
            type="text"
            name="nome"
            id="name"
            placeholder="nome..."
          />
          <input
            className="w-[392px] h-14 placeholder:text-blue-700 border-2 border-blue-700 rounded-3xl p-4"
            type="number"
            name="valor"
            id="price"
            placeholder="valor..."
          />
          <input
            className="w-[392px] h-14 placeholder:text-blue-700 border-2 border-blue-700 rounded-3xl p-4"
            type=""
            name="imagem"
            id="imagem"
            placeholder="imagem..."
          />
        </form>
        <div className="flex justify-around">
          <button
            type="submit"
            className="w-44 h-14 text-xl text-zinc-50 font-mono font-medium bg-blue-700 rounded-2xl"
          >
            Guardar
          </button>
          <button
            type="reset"
            className="w-44 h-14 text-xl text-blue-700 font-mono font-medium border-2 border-blue-700 rounded-2xl"
          >
            Limpar
          </button>
        </div>
      </div>
    );
}