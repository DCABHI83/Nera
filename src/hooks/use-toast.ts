import { toast as sonnerToast } from 'sonner';

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
}

export function useToast() {
  const toast = (options: ToastOptions) => {
    const { title, description, variant = 'default' } = options;
    
    if (variant === 'success') {
      sonnerToast.success(title, {
        description,
      });
    } else if (variant === 'destructive') {
      sonnerToast.error(title, {
        description,
      });
    } else {
      sonnerToast(title, {
        description,
      });
    }
  };

  return { toast };
}
