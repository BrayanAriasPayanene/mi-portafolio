export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-20 dark:opacity-30" />

      {/* Cometas animadas */}
      <div className="meteor meteor1" />
      <div className="meteor meteor2" />
      <div className="meteor meteor3" />

      {/* Contenido */}
      <h2 className="text-3xl md:text-5xl font-bold text-center z-10">
        Hola, soy Brayan Arias</h2>
      <p className="mt-4 text-base md:text-xl z-10 px-4 max-w-xl mx-auto">
        Desarrollador Frontend especializado en React.
      </p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white z-10">
        Ver mis proyectos
      </a>
    </section>
  );
}
