"use client";
import Sidebar from "@/app/components/Sidebar";
import NewWeekForm from "@/app/components/NewWeekForm";

export default function NewWeek() {
  return (
    <div className="flex">
      <div className="p-8 w-full">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold">New Week</h1>
            <p>Start planning your meals for the week</p>
          </div>
        </div>
        <NewWeekForm />
      </div>
    </div>
  );
}
