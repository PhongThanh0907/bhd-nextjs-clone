import React from "react";

type Props = {
  title: string;
  className?: string;
  icon?: JSX.Element;
};

export default function MainButton({ title, className, icon }: Props) {
  return (
    <button
      className={`bg-mgreen rounded-sm text-white font-semibold hover:bg-white hover:text-mgreen duration-200 uppercase ${className} uppercase flex justify-center items-center`}
    >
      {icon}
      {title}
    </button>
  );
}
