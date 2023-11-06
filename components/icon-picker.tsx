"use client"

import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { useTheme } from 'next-themes';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export const IconPicker = ({
  onChange,
  children,
  asChild
}: IconPickerProps) => {
  const {resolvedTheme} = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const onClick = (data: EmojiClickData) => {
    onChange(data.unified);
  }

  const themeMap = {
    "dark": Theme.DARK,
    "light": Theme.LIGHT,
  }

  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>
        {children}
      </PopoverTrigger>
      <PopoverContent
      className='p-5 md:p-0 w-full border-none shadow-none'
      >
        <EmojiPicker 
        height={350}
        theme={theme}
        onEmojiClick={onClick}
        emojiStyle={EmojiStyle.APPLE}
        />
      </PopoverContent>
    </Popover>
  )

}