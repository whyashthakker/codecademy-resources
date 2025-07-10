import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

interface DialogHeaderProps {
  children: React.ReactNode
  className?: string
}

interface DialogFooterProps {
  children: React.ReactNode
  className?: string
}

interface DialogTitleProps {
  children: React.ReactNode
  className?: string
}

interface DialogDescriptionProps {
  children: React.ReactNode
  className?: string
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {children}
    </div>
  )
}

const DialogOverlay: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
  />
)

const DialogContent: React.FC<DialogContentProps> = ({ children, className }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <DialogOverlay />
    <div
      className={cn(
        "relative z-50 grid w-full max-w-lg gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg border-gray-200 dark:border-gray-700 mt-8",
        className
      )}
      style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8f7e5 100%)' }}
    >
      {children}
    </div>
  </div>
)

const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
  >
    {children}
  </div>
)

const DialogFooter: React.FC<DialogFooterProps> = ({ children, className }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
  >
    {children}
  </div>
)

const DialogTitle: React.FC<DialogTitleProps> = ({ children, className }) => (
  <h2
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100",
      className
    )}
  >
    {children}
  </h2>
)

const DialogDescription: React.FC<DialogDescriptionProps> = ({ children, className }) => (
  <p
    className={cn(
      "text-sm text-gray-600 dark:text-gray-400",
      className
    )}
  >
    {children}
  </p>
)

const DialogClose: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
      className
    )}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </button>
)

export {
  Dialog,
  DialogOverlay,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} 