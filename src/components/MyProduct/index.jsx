import { ProductCard } from "../ProductCard";

export function MyProduct(){
    return (
      <div className="w-[758px] h-[1115px] p-10 gap-10 text-center flex flex-col items-center ">
        <h2 className="text-2xl leading-6">MEUS PRODUTOS:</h2>
        <div className="w-[678px] h-[971px] overflow-y-scroll grid grid-cols-3 p-3 gap-y-10 shadow-lg shadow-slate-950">
          {/** CARDS DOS PRODUTOS */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );
}