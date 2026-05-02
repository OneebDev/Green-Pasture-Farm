export function WhatsAppButton() {
  const phone = "923001234567";
  const msg = encodeURIComponent("Assalam o Alaikum! I'm interested in your farm animals.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.92 0-10.73 4.81-10.73 10.73 0 1.89.49 3.74 1.43 5.36L5 27l5.71-1.5a10.7 10.7 0 0 0 5.31 1.39h.01c5.92 0 10.73-4.81 10.73-10.73 0-2.87-1.12-5.57-3.14-7.59a10.65 10.65 0 0 0-7.6-3.24z"/>
      </svg>
    </a>
  );
}
