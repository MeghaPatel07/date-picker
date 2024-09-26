"use client"; // Must be the first line
import Image from "next/image";
import DatePickerWrapper from './component/DatePickerWrapper';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <DatePickerWrapper />
  </div>
  );
}


