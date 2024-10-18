export default function Notification({ title, message, status }) {
  const statusClasses = {
    error: "bg-red-700",
    success: "bg-green-500",
  };

  const specialClasses = statusClasses[status] || "";

  let cssClass = `w-full mt-3 border border-white shadow-xl h-12 flex justify-between py-2 px-[10%] items-center text-white  ${
    specialClasses || "bg-[#1A8ED1]"
  }`;

  return (
    <section className={cssClass}>
      <h2 className="text-base font-bold font-sans">{title}</h2>
      <p className="text-base">{message}</p>
    </section>
  );
}
