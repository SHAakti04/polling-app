export default function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl bg-white/20 
      text-white placeholder-white/60 outline-none 
      focus:ring-2 focus:ring-indigo-400 transition-all"
    />
  );
}
