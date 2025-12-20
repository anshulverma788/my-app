import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

/* ---------- FORM ROOT ---------- */
const Form = ({ children, ...props }) => {
  return <FormProvider {...props}>{children}</FormProvider>;
};

/* ---------- FORM FIELD CONTEXT ---------- */
const FormFieldContext = React.createContext({});

const FormField = ({ name, control, render, ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} control={control} render={render} {...props} />
    </FormFieldContext.Provider>
  );
};

/* ---------- HELPER HOOK ---------- */
const FormItemContext = React.createContext({});

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField must be used inside <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const id = itemContext.id;

  return {
    id,
    name: fieldContext.name,
    error: fieldState.error,
    formItemId: `${id}-item`,
    formDescriptionId: `${id}-description`,
    formMessageId: `${id}-message`,
  };
};

/* ---------- ITEM ---------- */
const FormItem = React.forwardRef(function FormItem(
  { className, ...props },
  ref
) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});

/* ---------- LABEL ---------- */
const FormLabel = React.forwardRef(function FormLabel(
  { className, ...props },
  ref
) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      htmlFor={formItemId}
      className={cn(error && "text-destructive", className)}
      {...props}
    />
  );
});

/* ---------- CONTROL ---------- */
const FormControl = React.forwardRef(function FormControl(
  { ...props },
  ref
) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});

/* ---------- DESCRIPTION ---------- */
const FormDescription = React.forwardRef(function FormDescription(
  { className, ...props },
  ref
) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

/* ---------- MESSAGE (ERROR) ---------- */
const FormMessage = React.forwardRef(function FormMessage(
  { className, children, ...props },
  ref
) {
  const { error, formMessageId } = useFormField();
  const body = error?.message || children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});

/* ---------- EXPORTS ---------- */
export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};
