"use client";

import useAuth from "@/lib/auth";
import AvailableTab from "@/ui/availableTab";
import BorrowedTab from "@/ui/borrowedTab";
import OverdueTab from "@/ui/overdueTab";
import ReserveTab from "@/ui/reserveTab";
import Statistique from "@/ui/statistique";

type Props = {};

export default function Page({ }: Props) {
  useAuth()
  return (
    <div className="mx-[5%] mt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <Statistique books={true} />
      <OverdueTab val={true} />
      <BorrowedTab val={true} />
      <ReserveTab val={true} />
      <AvailableTab val={true} />
    </div>
  );
}
