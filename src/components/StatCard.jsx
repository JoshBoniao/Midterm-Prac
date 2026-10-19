function StatCard({ label, value }) {
  return (
    <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
      <p className="text-4xl font-bold text-[#FA8112]">{label}</p>
      <p className="mt-1 text-lg">{value}</p>
    </div>
  );
}
export default StatCard;
