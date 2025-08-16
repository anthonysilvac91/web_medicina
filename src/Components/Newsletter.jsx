import { useState } from "react";
import doctorImg from '../assets/doctor.png'

export default function Newsletter({
  imageSrc = doctorImg, // pon tu ruta real (public/img/… o src/assets import)
  title = "Recibe consejos de salud y promociones exclusivas",
  onSubmit, // opcional: callback(email)
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setError("Ingresa un correo válido.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      // 🔗 Conecta aquí tu backend/Mailchimp/Sendinblue luego:
      // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });
      if (onSubmit) await onSubmit(email); // opcional
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Ocurrió un problema. Intenta nuevamente.");
    }
  };

  return (
    <section className="padding-general bg-bg-primary mt-15">
      <div className="grid gap-8 lg:grid-cols-2 items-center xl:px-12">
        {/* Ilustración */}
        <div className="flex justify-center">
          <img
            src= {doctorImg}
            alt="Equipo médico"
            className="max-w-[520px] w-full h-auto"
          />
        </div>

        {/* Tarjeta de suscripción */}
        <div className="rounded-2xl bg-blue-50/90 md:p-8
                        shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-center font-semibold text-gray-700 mb-4">
            {title}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot anti-bots (invisible) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              className="w-full rounded-md bg-white px-4 py-2.5 text-gray-700
                         ring-1 ring-gray-200 focus:outline-none focus:ring-2
                         focus:ring-[#0ea5a3]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === "error"}
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-md px-6 py-2 font-semibold text-white
                           bg-[#0ea5a3] hover:bg-[#0b8e8c] disabled:opacity-70
                           transition-colors"
              >
                {status === "loading" ? "Enviando..." : "Suscribirse"}
              </button>
            </div>

          
            <p className="text-center text-sm text-red-500" aria-live="polite">
              {error}
            </p>
            {status === "success" && (
              <p className="text-center text-sm text-green-600" aria-live="polite">
                ¡Listo! Revisa tu correo para confirmar la suscripción.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
