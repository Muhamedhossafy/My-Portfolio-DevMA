
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Gift, ShieldCheck } from 'lucide-react';

const sampleProducts = [
  { id: '1', name: 'سماعة رأس لاسلكية فاخرة', description: 'صوت نقي وباس عميق، تصميم مريح.', price: 129.99, imageDescription: 'Sleek black wireless headphones on a modern background' },
  { id: '2', name: 'ساعة ذكية متطورة', description: 'تتبع لياقتك، إشعارات فورية، وأكثر.', price: 199.50, imageDescription: 'Modern smartwatch displaying a colorful interface' },
  { id: '3', name: 'كاميرا احترافية 4K', description: 'التقط لحظاتك بدقة مذهلة.', price: 499.00, imageDescription: 'Professional DSLR camera with lens attached' },
  { id: '4', name: 'حقيبة ظهر أنيقة للسفر', description: 'مساحة واسعة، تصميم مقاوم للماء.', price: 79.99, imageDescription: 'Stylish gray backpack suitable for travel and daily use' },
];

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 glassmorphism"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="space-y-16">
      <motion.section 
        className="text-center py-16 md:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-xl shadow-2xl text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            مرحباً بك في <span className="text-yellow-300">متجري</span> الإلكتروني!
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            اكتشف مجموعتنا الرائعة من المنتجات المختارة بعناية لتلبية جميع احتياجاتك.
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/products">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-700 font-bold text-lg px-10 py-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                تصفح المنتجات الآن <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">أحدث المنتجات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sampleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">لماذا تتسوق معنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap size={24} />} 
            title="تشكيلة واسعة" 
            description="منتجات متنوعة تلبي جميع الأذواق والاحتياجات." 
          />
          <FeatureCard 
            icon={<Gift size={24} />} 
            title="عروض حصرية" 
            description="استفد من خصومات وعروض خاصة لعملائنا الكرام." 
          />
          <FeatureCard 
            icon={<ShieldCheck size={24} />} 
            title="تسوق آمن" 
            description="نضمن لك تجربة تسوق آمنة وموثوقة مع خيارات دفع متعددة." 
          />
        </div>
      </section>

      <section className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">انضم إلى قائمتنا البريدية</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">كن أول من يعرف عن أحدث المنتجات والعروض الحصرية مباشرة في بريدك الإلكتروني.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto gap-3">
          <input 
            type="email" 
            placeholder="أدخل بريدك الإلكتروني" 
            className="flex-grow p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none dark:bg-gray-700 dark:text-white"
          />
          <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold">
            اشترك الآن
          </Button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
  