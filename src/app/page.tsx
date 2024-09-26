"use client"; // Must be the first line
import Image from "next/image";
import DatePicker from "../component/DatePicker";
import { DatePickerProvider } from "@/context/DatePickerContext";
export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center">
     <DatePickerProvider>
      <DatePicker />
    </DatePickerProvider>
  </div>
  );
}


