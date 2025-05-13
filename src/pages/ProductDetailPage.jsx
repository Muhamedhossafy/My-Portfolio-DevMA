
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star, ChevronLeft, CheckCircle, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample product data - in a real app, this would come from an API or context
const allProducts = [
  { id: '1', name: 'سماعة رأس لاسلكية فاخرة', category: 'إلكترونيات', price: 129.99, imageDescription: 'Sleek black wireless headphones on a modern background', description: 'صوت نقي وباس عميق، تصميم مريح وعصري للاستخدام اليومي. تتميز ببطارية تدوم طويلاً وتقنية إلغاء الضوضاء النشطة لتجربة استماع غامرة.', rating: 4.5, reviews: 120, stock: 15 },
  { id: '2', name: 'ساعة ذكية متطورة', category: 'إلكترونيات', price: 199.50, imageDescription: 'Modern smartwatch displaying a colorful interface', description: 'تتبع لياقتك، إشعارات فورية، شاشة AMOLED ساطعة. مقاومة للماء وتدعم العديد من التطبيقات الرياضية والصحية.', rating: 4.8, reviews: 250, stock: 22 },
  { id: '3', name: 'كاميرا احترافية 4K', category: 'إلكترونيات', price: 499.00, imageDescription: 'Professional DSLR camera with lens attached', description: 'التقط لحظاتك بدقة مذهلة، مستشعر كبير، وعدسات قابلة للتبديل. مثالية للمصورين المحترفين والهواة المتقدمين.', rating: 4.9, reviews: 95, stock: 8 },
  { id: '4', name: 'حقيبة ظهر أنيقة للسفر', category: 'أزياء', price: 79.99, imageDescription: 'Stylish gray backpack suitable for travel and daily use', description: 'مساحة واسعة، تصميم مقاوم للماء، جيوب متعددة لتنظيم أغراضك. مريحة للحمل ومثالية للرحلات القصيرة والاستخدام اليومي.', rating: 4.3, reviews: 70, stock: 30 },
];


const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  
  // Find product by ID. In a real app, you might fetch this.
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">لم يتم العثور على المنتج</h2>
        <Link to="/products">
          <Button className="mt-4">العودة إلى المنتجات</Button>
        </Link>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} className={`h-5 w-5 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden p-6 md:p-10"
      >
        <Link to="/products" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-6">
          <ChevronLeft className="mr-1 h-5 w-5" /> العودة إلى قائمة المنتجات
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="aspect-square rounded-lg overflow-hidden shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img  
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              alt={product.name}
             src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600 dark:text-gray-400">({product.reviews} تقييمات)</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">${product.price.toFixed(2)}</span>
              {product.stock > 0 ? (
                <span className="ml-4 inline-flex items-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-700/30 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="mr-1.5 h-4 w-4" /> متوفر ({product.stock} قطع)
                </span>
              ) : (
                <span className="ml-4 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-700/30 px-3 py-1 rounded-full text-sm font-medium">غير متوفر حالياً</span>
              )}
            </div>

            <Button 
              size="lg" 
              onClick={() => addToCart(product)} 
              disabled={product.stock === 0}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> أضف إلى السلة
            </Button>

            <div className="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Truck className="mr-2 h-5 w-5 text-purple-500" />
                <span>شحن سريع ومجاني للطلبات فوق $50</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="mr-2 h-5 w-5 text-purple-500" />
                <span>إرجاع سهل خلال 30 يومًا</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-purple-500" />
                <span>ضمان لمدة عام على جميع الإلكترونيات</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailPage;
  