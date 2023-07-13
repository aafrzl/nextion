import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2, Trash } from 'lucide-react';
import { useState, useTransition } from 'react';

interface Props {
  title: string;
  desc: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClick?: () => void;
  className?: string;
}

const Alert = (props: Props) => {
  return (
    <AlertDialog
      open={props.open}
      onOpenChange={props.onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription>{props.desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={props.onClick}
            className={props.className}>
            Setuju
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
