
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) {
    return null; 
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
      <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl border-transparent hover:border-primary">
        <CardHeader className="p-0">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <img  
              className="object-cover w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-110" 
              alt={product.name || 'Product Image'}
             src="https://images.unsplash.com/photo-1619956169300-c15c511a1c27" />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-bold text-primary dark:text-primary-foreground mb-1 truncate">{product.name || "اسم المنتج"}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden">{product.description || "وصف قصير للمنتج..."}</CardDescription>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{product.price ? `$${product.price.toFixed(2)}` : "$0.00"}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <Button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> أضف للسلة
          </Button>
          <Link to={`/products/${product.id}`}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300">
              <Eye className="mr-2 h-4 w-4" /> عرض
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
  