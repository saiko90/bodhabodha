export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      {/* Cercle pulsant */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-yellow-300/30 rounded-full animate-ping" />
        <div className="absolute inset-0 border-4 border-yellow-300 rounded-full animate-pulse" />
      </div>
      
      <h2 className="text-2xl font-serif text-yellow-100 animate-pulse tracking-widest uppercase">
        Revealing your Lens...
      </h2>
    </div>
  )
}