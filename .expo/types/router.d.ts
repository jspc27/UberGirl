import { usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function PersistRoute() {
  const pathname = usePathname(); // Obtiene la ruta actual
  const router = useRouter();

  useEffect(() => {
    if (pathname) {
      router.replace(pathname); // Vuelve a la misma ruta después del refresh
    }
  }, []);

  return null;
}
