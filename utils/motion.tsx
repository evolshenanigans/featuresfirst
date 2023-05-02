function Drive() {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref);
  
    const variants = {
      hidden: { x: -500 },
      visible: { x: 0 },
    };
    const variants2 = {
      hidden: { x: 500 },
      visible: { x: 0 },
    };