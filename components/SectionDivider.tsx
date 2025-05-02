export default function SectionDivider() {
  return (
    <div className="relative h-32">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#FFDF1E]/30 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#FFDF1E]" />
    </div>
  );
}
