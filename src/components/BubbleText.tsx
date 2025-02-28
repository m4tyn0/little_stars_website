import React from 'react';
import { motion } from 'framer-motion';

interface BubbleTextProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
}

const adjustColor = (hex: string, amount: number) => {
  // Simple function to darken/lighten a hex color
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  // Adjust each component
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));
  
  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const BubbleText: React.FC<BubbleTextProps> = ({
  title,
  children,
  icon,
  color = "#FFB4EC",
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      {/* Animated bubble background - first layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[180%] aspect-square"
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full"
          >
            <motion.path
              d="M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100"
              fill={color}
              className="opacity-50 mix-blend-multiply"
              animate={{
                d: [
                  "M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100",
                  "M 45,92 C 42,65 62,38 98,40 C 138,42 158,68 155,98 C 152,128 132,152 95,148 C 62,145 42,122 45,92",
                  "M 52,96 C 48,68 72,45 102,48 C 135,51 152,72 148,105 C 144,132 125,148 92,145 C 65,142 48,125 52,96",
                  "M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100",
                ],
                fill: [color, adjustColor(color, -10), adjustColor(color, 10), color],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Second bubble layer for added depth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[190%] aspect-square"
          animate={{
            scale: [1.02, 1, 1.05, 1.02],
            rotate: [1, -1, 0, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full"
          >
            <motion.path
              d="M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100"
              fill={color}
              className="opacity-30 mix-blend-multiply"
              animate={{
                d: [
                  "M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100",
                  "M 48,105 C 45,75 68,42 98,45 C 132,48 155,75 152,105 C 149,135 125,155 95,152 C 65,149 45,135 48,105",
                  "M 50,100 C 50,70 70,50 100,50 C 130,50 150,70 150,100 C 150,130 130,150 100,150 C 70,150 50,130 50,100",
                ],
                fill: [adjustColor(color, 5), color, adjustColor(color, -5), adjustColor(color, 5)],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {(title || icon) && (
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon && <div className="w-8 h-8 md:w-12 md:h-12">{icon}</div>}
            {title && (
              <motion.h2 
                className="text-xl md:text-2xl font-bold text-white"
                animate={{
                  y: [0, -1, 0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        <motion.div 
          className="text-sm md:text-base text-white leading-relaxed"
          style={{ flexShrink: 1 }}
          animate={{
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default BubbleText;
