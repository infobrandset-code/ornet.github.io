import type { ProductItem } from "../../data/constants";
import ElectricAccent from "./ElectricAccent";

interface ProductCardProps {
  item: ProductItem;
  image: string;
  index: number;
}

export default function ProductCard({ item, image, index }: ProductCardProps) {
  return (
    <div
      className="group relative border border-[#2A2F2F] overflow-hidden bg-[#151818] hover:border-[#9FE870]/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-700 ease-out hover:-translate-y-1 h-[480px] sm:h-[540px] flex flex-col justify-end"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background image underlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/50 to-[#121414]/10 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-all duration-700 z-10 pointer-events-none" />
        <img
          src={image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-all duration-[1.5s] ease-out will-change-transform"
        />
      </div>

      {/* Floating electric glow elements */}
      <ElectricAccent size={40} thickness={1.5} color="#9FE870" />

      {/* Product Content Overlay */}
      <div className="relative z-20 p-8 sm:p-10 flex flex-col h-full justify-between">
        {/* Rating tags in top corner */}
        <div className="flex justify-between items-start gap-4">
          <span className="bg-[#1A1D1D]/90 border border-[#2A2F2F] text-xs font-mono uppercase tracking-[1.5px] px-3.5 py-1.5 text-[#9FE870] font-semibold">
            {item.tag}
          </span>
          <div className="text-right">
            <p className="text-xs text-[#9FE870] font-mono uppercase tracking-widest font-semibold">{item.capacity}</p>
            <p className="text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mt-0.5">{item.voltage}</p>
          </div>
        </div>

        {/* Content body at the bottom */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-light mb-4 text-white tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500">
            {item.title}
          </h3>
          <p className="text-[#A6ABA6] text-sm leading-relaxed font-light line-clamp-3 mb-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
            {item.description}
          </p>

          {/* Detailed tech spec panel that slides up on hover */}
          <div className="absolute left-8 right-8 bottom-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-30">
            <h4 className="text-[10px] text-[#9FE870] font-mono uppercase tracking-[2px] font-semibold mb-3 border-b border-[#2D3232] pb-1.5">
              Technical Parameters
            </h4>
            <ul className="space-y-2">
              {item.specs.slice(0, 3).map((spec, i) => (
                <li key={i} className="text-xs text-[#C2C7C2] font-mono flex items-start gap-2.5 leading-snug">
                  <span className="text-[#9FE870] text-[10px] mt-0.5">▪</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
