import { useRef, useEffect, RefObject } from 'react';

export const useDraggableScroll = (ref: RefObject<HTMLElement>) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      el.classList.add('cursor-grabbing');
      el.classList.remove('cursor-grab');
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    const onMouseLeaveOrUp = () => {
      isDragging.current = false;
      el.classList.remove('cursor-grabbing');
      el.classList.add('cursor-grab');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Multiplier for faster scroll
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeaveOrUp);
    el.addEventListener('mouseup', onMouseLeaveOrUp);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeaveOrUp);
      el.removeEventListener('mouseup', onMouseLeaveOrUp);
      el.removeEventListener('mousemove', onMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [ref]);
};
