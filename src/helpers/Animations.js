export const fade = (direction) => ({
    hidden: { 
      opacity: 0,
      x: direction === 0 ? -300 : 300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  });

export const fadeUp ={
    hidden: {
        opacity: 0,
        y: 0,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .75,
        },
    },
}

export const titleAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 2.75, ease: "easeOut" },
    },
  
}