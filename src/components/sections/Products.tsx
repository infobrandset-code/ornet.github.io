import { PRODUCTS } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";
import useInView from "../../hooks/useInView";

export default function Products() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      id="products"
      className={`py-24 sm:py-32 lg:py-40 border-t border-[#232727] bg-[#121414] transition-all duration-1000 ease-out`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline={PRODUCTS.tagline}
          headline={PRODUCTS.headline}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {PRODUCTS.items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-1000 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <ProductCard
                item={item}
                image={
                  item.image || "/ornet.github.io/images/transformer-main.png"
                }
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
