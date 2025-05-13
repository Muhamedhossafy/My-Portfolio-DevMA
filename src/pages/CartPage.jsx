
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Trash2, PlusCircle, MinusCircle, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const total = getCartTotal();

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mx-auto py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      >
        سلة التسوق الخاصة بك
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500 mb-6" />
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-3">سلة التسوق فارغة!</p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">يبدو أنك لم تقم بإضافة أي منتجات إلى سلتك بعد.</p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold">
              ابدأ التسوق الآن
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={item.name}
                     src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  </div>
                  <div className="flex-grow text-center sm:text-right">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">السعر: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3 my-2 sm:my-0">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-700/50">
                      <MinusCircle />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      min="1"
                    />
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-700/50">
                      <PlusCircle />
                    </Button>
                  </div>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-200 w-24 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-100 dark:hover:bg-red-700/50">
                    <Trash2 />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
            {cartItems.length > 0 && (
              <motion.div layout className="mt-6 flex justify-end">
                <Button variant="outline" onClick={clearCart} className="text-red-600 border-red-500 hover:bg-red-500 hover:text-white dark:text-red-400 dark:border-red-600 dark:hover:bg-red-600 dark:hover:text-white">
                  <X className="mr-2 h-4 w-4" /> إفراغ السلة
                </Button>
              </motion.div>
            )}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: cartItems.length * 0.1 + 0.2 }}
            className="lg:col-span-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl h-fit sticky top-24"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-3 border-gray-300 dark:border-gray-700">ملخص الطلب</h2>
            <div className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>الشحن</span>
                <span className="text-green-600 dark:text-green-400">مجاني</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-300 dark:border-gray-700">
                <span>الإجمالي</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg py-3 transition-all duration-300 transform hover:scale-105">
              المتابعة إلى الدفع
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              سيتم تطبيق الضرائب عند الدفع.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
  