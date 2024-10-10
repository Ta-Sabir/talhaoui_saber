import "../globals.css";

export default function NotFound() {
  return (
    <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
      <div className="min-h-[70vh] flex items-center flex-col justify-center gap-4">
        <h2 className="flex text-6xl font-bold text-black">
          يبدو أنك قد ضللت الطريق!
        </h2>
        <p className="text-xl font-medium mt-2">
          للأسف الصفحة التي قمت بطلبها غير موجودة أو قد تم إزالتها.
        </p>
      </div>
    </main>
  );
}
