import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function MainButton({ title, className }: Props) {
  return (
    <button
      className={`bg-mgreen rounded-sm text-white font-semibold hover:bg-white hover:text-mgreen duration-200 uppercase ${className}`}
    >
      {title}
    </button>
  );
}
