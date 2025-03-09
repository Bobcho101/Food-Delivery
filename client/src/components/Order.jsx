export default function OrderFood() {
    const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
    ];                                                                      
   return (
    <div className="bg-[#1E1B18] text-gray-100">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <h2 className="text-3xl font-bold tracking-tight text-[#FFB703]">Customers also purchased</h2>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
            />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  <a href={product.href} className="hover:text-[#E63946]">
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-400">{product.color}</p>
              </div>
              <p className="text-md font-semibold text-[#FFB703]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
   );
}