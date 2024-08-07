import { DollarSign, Trash2 } from "lucide-react";

export function ProductCard(){
    return (
      <>
        <div className="w-48 h-64 flex flex-col text-zinc-50 border-4 border-zinc-950 rounded-lg p-2.5 bg-indigo-700 space-y-2">
          <img
            className="w-44"
            src="src/assets/image3.svg"
            alt="Caneca Stormtrooper"
          />
          <p className="text-md text-left font-mono">Stormtrooper</p>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-sm">
              <DollarSign size={16} absoluteStrokeWidth /> 60,00
            </p>
            <Trash2 size={20} absoluteStrokeWidth />
          </div>
        </div>

        <div className="w-48 h-64 flex flex-col text-zinc-50 border-4 border-zinc-950 rounded-lg p-2.5 bg-indigo-700 space-y-2">
          <img
            className="w-44"
            src="src/assets/image2.svg"
            alt="Game Boy classic"
          />
          <p className="text-md text-left font-mono">Game Boy Classic</p>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-sm">
              <DollarSign size={16} absoluteStrokeWidth /> 60,00
            </p>
            <Trash2 size={20} absoluteStrokeWidth />
          </div>
        </div>
      </>
    );
}