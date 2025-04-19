module.exports = {
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        gradient: "gradient 8s linear infinite",
        "gradient-slow": "gradient 15s linear infinite",
        float: "float 6s ease-in-out infinite",
        'button-glow': 'button-glow 1.5s ease-in-out infinite',
        'marquee-left': 'marquee-left 15s linear infinite',
        'marquee-right': 'marquee-right 15s linear infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
            opacity: "0.3",
          },
        },
        'button-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.4)',
          },
          '50%': {
            transform: 'scale(1.01)',
            boxShadow: '0 0 20px 5px rgba(37, 99, 235, 0.2)',
          },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
    },
  },
  // ... rest of the config
} 