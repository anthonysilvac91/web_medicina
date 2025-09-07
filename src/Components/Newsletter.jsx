// import { useState } from "react";
// import doctorImg from "../assets/doctor.png"
// function Newsletter({
//   imageSrc = doctorImg,
//   title = "Recibe consejos de salud y promociones exclusivas",
// }) {
//   const [email, setEmail] = useState("");
//   const [phase, setPhase] = useState("idle"); // idle | loading | success | error

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!email) return;

//     setPhase("loading");
//     try {
//       const r = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       if (!r.ok) throw new Error();
//       setPhase("success");
//       setEmail("");
//     } catch {
//       setPhase("error");
//     }
//   }

//   return (
//     <section className="padding-general bg-bg-primary mt-15">
//       <div className="grid gap-8 lg:grid-cols-2 items-center xl:px-12">
//         {imageSrc && (
//           <div className="flex justify-center">
           
//             <div className="flex justify-center">
//            <img
//              src= {doctorImg}
//              alt="Equipo médico"
//              className="max-w-[520px] w-full h-auto"
//            />
//          </div>
//           </div>
//         )}

//         <div className="rounded-2xl bg-blue-50/90 p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
//           <h3 className="h3-responsive mb-4 text-center">{title}</h3>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//             <input
//               type="email"
//               required
//               placeholder="tu@correo.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full rounded-md bg-white px-4 py-2.5 text-gray-700 ring-1 ring-gray-200
//                          focus:outline-none focus:ring-2 focus:ring-[#0ea5a3]"
//             />

//             <button
//               type="submit"
//               disabled={phase === "loading"}
//               className="rounded-md px-6 py-2 font-semibold text-white
//                          bg-[#0ea5a3] hover:bg-[#0b8e8c] disabled:opacity-70 transition-colors"
//             >
//               {phase === "loading" ? "Enviando…" : "Suscribirse"}
//             </button>

//             {phase === "success" && (
//               <p className="text-center text-sm text-green-600">
//                 ¡Listo! Te suscribimos a la lista.
//               </p>
//             )}
//             {phase === "error" && (
//               <p className="text-center text-sm text-red-500">
//                 Ocurrió un problema. Intenta nuevamente.
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Newsletter;

//se agrega solo por add


import { useState } from "react";
import doctorImg from "../assets/doctor.png"
function Newsletter({
  imageSrc = doctorImg,
  title = "Recibe consejos de salud y promociones exclusivas",
}) {
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    setPhase("loading");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!r.ok) throw new Error();
      setPhase("success");
      setEmail("");
    } catch {
      setPhase("error");
    }
  }

  return (
    <section className="padding-general bg-bg-primary mt-15">
      <div className="grid gap-8 lg:grid-cols-2 items-center xl:px-12">
        {imageSrc && (
          <div className="flex justify-center">
           
            <div className="flex justify-center">
           <img
             src= {doctorImg}
             alt="Equipo médico"
             className="max-w-[520px] w-full h-auto"
           />
         </div>
          </div>
        )}

        <div className="rounded-2xl bg-blue-50/90 p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <h3 className="h3-responsive mb-4 text-center">{title}</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-white px-4 py-2.5 text-gray-700 ring-1 ring-gray-200
                         focus:outline-none focus:ring-2 focus:ring-[#0ea5a3]"
            />

            <button
              type="submit"
              disabled={phase === "loading"}
              className="rounded-md px-6 py-2 font-semibold text-white
                         bg-[#0ea5a3] hover:bg-[#0b8e8c] disabled:opacity-70 transition-colors"
            >
              {phase === "loading" ? "Enviando…" : "Suscribirse"}
            </button>

            {phase === "success" && (
              <p className="text-center text-sm text-green-600">
                ¡Listo! Te suscribimos a la lista.
              </p>
            )}
            {phase === "error" && (
              <p className="text-center text-sm text-red-500">
                Ocurrió un problema. Intenta nuevamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;


