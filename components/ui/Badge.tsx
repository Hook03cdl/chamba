export default function Badge({ status }: { status: string | undefined }) {
  switch (status) {
    case "pending":
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Pendiente
        </span>
      );
    case "accepted":
      return (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
          Aceptado
        </span>
      );
    case "rejected":
      return (
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300">
          Rechazado
        </span>
      );
    case "done":
      return (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-green-900 dark:text-green-300">
          Terminado
        </span>
      );
  }
}
