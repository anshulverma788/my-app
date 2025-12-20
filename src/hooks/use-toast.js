import { toast as sonnerToast } from "sonner";

export function useToast() {
  return {
    toast: ({ title, description }) =>
      sonnerToast(title || description || "Notification"),
    dismiss: (id) => sonnerToast.dismiss(id),
  };
}

export const toast = (title, options = {}) => {
  return sonnerToast(title, options);
};
