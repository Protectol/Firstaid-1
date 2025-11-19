"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  // Update selected category when URL params change
  useEffect(() => {
    const categoryParam = searchParams.get("category") || "all";
    setSelectedCategory(categoryParam);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase().replace(/\s+/g, "-") ===
          selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="container-custom py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="card p-6 sticky top-24">
            <h3 className="text-lg font-bold text-secondary-900 mb-6">
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary-600 text-white"
                    : "hover:bg-secondary-100 text-secondary-700"
                }`}
              >
                All Products
                <span className="float-right text-sm opacity-75">
                  ({products.length})
                </span>
              </button>
              {categories.map((category) => {
                const count = products.filter(
                  (p) =>
                    p.category.toLowerCase().replace(/\s+/g, "-") ===
                    category.slug
                ).length;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.slug
                        ? "bg-primary-600 text-white"
                        : "hover:bg-secondary-100 text-secondary-700"
                    }`}
                  >
                    {category.name}
                    <span className="float-right text-sm opacity-75">
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-secondary-200">
              <h4 className="text-sm font-semibold text-secondary-900 mb-4">
                Need Help Choosing?
              </h4>
              <p className="text-sm text-secondary-600 mb-4">
                Our experts are here to help you find the perfect products for
                your needs.
              </p>
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm py-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Mobile Filter Toggle */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-outline flex items-center justify-center gap-2 py-3"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden card p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-secondary-900">
                  Categories
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-secondary-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setShowFilters(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === "all"
                      ? "bg-primary-600 text-white"
                      : "hover:bg-secondary-100 text-secondary-700"
                  }`}
                >
                  All Products ({products.length})
                </button>
                {categories.map((category) => {
                  const count = products.filter(
                    (p) =>
                      p.category.toLowerCase().replace(/\s+/g, "-") ===
                      category.slug
                  ).length;

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.slug);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? "bg-primary-600 text-white"
                          : "hover:bg-secondary-100 text-secondary-700"
                      }`}
                    >
                      {category.name} ({count})
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-secondary-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
              product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="card group hover:shadow-hover"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.inStock && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        In Stock
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary-600 font-semibold mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 text-center btn-secondary text-sm py-2 px-4"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 text-center btn-primary text-sm py-2 px-4"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-secondary-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                No products found
              </h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
