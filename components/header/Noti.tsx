"use client";
import RelativeTime from "../ui/RelativeTime";
import { useState } from "react";
import { markAsRead } from "@/lib/actions/notifications";

export default function Noti({
  id,
  msg,
  title,
  read_at,
  created_at,
}: {
  id: number | string;
  title: string;
  msg: string;
  read_at: string;
  created_at: string;
}) {
  const [readAt, setReadAt] = useState(read_at != null);
  const handleMarkAsRead = async () => {
    await markAsRead(id);
    setReadAt(true);
  };

  return (
    <div
      className={`${
        !readAt ? "bg-zinc-200 p-2 rounded-md" : "bg-white p-2 rounded-md"
      }`}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold text-xs text-shark">{title}</h4>
        <p className="text-xs text-shark/90">
          <RelativeTime dateTime={created_at} />
        </p>
      </div>
      <p className="line-clamp-2 text-sm">{msg}</p>
      {!readAt && (
        <button onClick={handleMarkAsRead}>
          <span className="text-xs font-bold underline">Marcar como leido</span>
        </button>
      )}
    </div>
  );
}
