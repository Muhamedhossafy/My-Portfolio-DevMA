
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allProducts = [
  { id: '1', name: 'سماعة رأس لاسلكية فاخرة', category: 'إلكترونيات', price: 129.99, imageDescription: 'Sleek black wireless headphones on a modern background', description: 'صوت نقي وباس عميق، تصميم مريح وعصري للاستخدام اليومي.' },
  { id: '2', name: 'ساعة ذكية متطورة', category: 'إلكترونيات', price: 199.50, imageDescription: 'Modern smartwatch displaying a colorful interface', description: 'تتبع لياقتك، إشعارات فورية، شاشة AMOLED ساطعة.' },
  { id: '3', name: 'كاميرا احترافية 4K', category: 'إلكترونيات', price: 499.00, imageDescription: 'Professional DSLR camera with lens attached', description: 'التقط لحظاتك بدقة مذهلة، مستشعر كبير، وعدسات قابلة للتبديل.' },
  { id: '4', name: 'حقيبة ظهر أنيقة للسفر', category: 'أزياء', price: 79.99, imageDescription: 'Stylish gray backpack suitable for travel and daily use', description: 'مساحة واسعة، تصميم مقاوم للماء، جيوب متعددة لتنظيم أغراضك.' },
  { id: '5', name: 'حذاء رياضي مريح للجري', category: 'أزياء', price: 89.90, imageDescription: 'Comfortable running shoes with vibrant colors', description: 'تقنية توسيد متقدمة، خفيف الوزن، مثالي للتمارين الرياضية.' },
  { id: '6', name: 'مجموعة أدوات مطبخ متكاملة', category: 'منزل', price: 149.00, imageDescription: 'Complete kitchen utensil set in stainless steel', description: 'ستانلس ستيل عالي الجودة، مقاوم للصدأ، تصميم أنيق وعملي.' },
  { id: '7', name: 'كتاب الطبخ العالمي', category: 'كتب', price: 29.99, imageDescription: 'Hardcover cookbook with international recipes', description: 'وصفات متنوعة من جميع أنحاء العالم، صور ملونة، تعليمات سهلة.' },
  { id: '8', name: 'نبات زينة داخلي', category: 'منزل', price: 19.95, imageDescription: 'Potted green indoor plant in a stylish pot', description: 'يضيف لمسة طبيعية لمنزلك، سهل العناية، ينقي الهواء.' },
];

const categories = ['الكل', ...new Set(allProducts.map(p => p.category))];

const ProductsListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let products = allProducts;
    if (selectedCategory !== 'الكل') {
      products = products.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(products);
  }, [searchTerm, selectedCategory]);

  const filterPanelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-2">
          اكتشف منتجاتنا
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
          تصفح مجموعتنا المتنوعة واعثر على ما يناسبك.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Input
              type="text"
              placeholder="ابحث بالاسم أو الوصف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-2 border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            variant="outline" 
            className="w-full md:w-auto text-lg py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white dark:text-purple-400 dark:border-purple-600 dark:hover:bg-purple-600 dark:hover:text-white"
          >
            <Filter className="mr-2 h-5 w-5" /> {showFilters ? 'إخفاء الفلاتر' : 'إظهار الفلاتر'}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            variants={filterPanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">فلترة حسب الفئة</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${selectedCategory === category ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-105' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
             <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <img  alt="No products found" className="mx-auto mb-6 w-48 h-48 opacity-70" src="https://images.unsplash.com/photo-1696744404432-d829841194f4" />
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">لا توجد منتجات تطابق بحثك.</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">حاول تعديل الفلاتر أو استخدام كلمات بحث مختلفة.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProductsListPage;
  