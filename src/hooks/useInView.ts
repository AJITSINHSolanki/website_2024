import { useInView } from 'react-intersection-observer';

const useInViewHook = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust threshold as needed
    triggerOnce: true, // Trigger animation only once
  });

  return { ref, inView };
};

export default useInViewHook;