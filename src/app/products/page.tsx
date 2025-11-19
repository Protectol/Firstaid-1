import { Suspense } from "react";
import { motion } from "framer-motion";
import ProductsClient from "./ProductsClient";

function ProductsLoading() {
  return (
    <div className="container-custom py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="card p-6 sticky top-24">
            <div className="h-8 bg-secondary-200 rounded w-3/4 mb-6 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-secondary-200 rounded w-full animate-pulse"></div>
              ))}
            </div>
          </div>
        </aside>
        {/* Main Content Skeleton */}
        <div className="flex-1">
          <div className="mb-8 h-12 bg-secondary-200 rounded w-full animate-pulse"></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card group">
                <div className="h-56 bg-secondary-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-secondary-200 rounded w-1/4 mb-2 animate-pulse"></div>
                  <div className="h-6 bg-secondary-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-secondary-200 rounded w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-secondary-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-100">
              Explore our comprehensive range of professional-grade first aid
              products and safety equipment
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<ProductsLoading />}>
        <ProductsClient />
      </Suspense>
    </div>
  );
}
