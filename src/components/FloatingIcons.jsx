const floatingIcons = [
  { src: "/image/ion--logo-react.png", position: "left-[10%] top-[20%]", animation: "animate-float-slow" },
  { src: "/image/icons8-javascript-48.png", position: "right-[14%] top-[16%]", animation: "animate-float" },
  { src: "/image/icons8-tailwind-css-48.png", position: "left-[16%] bottom-[18%]", animation: "animate-float-reverse" },
  { src: "/image/typescript.png", position: "right-[22%] bottom-[20%]", animation: "animate-float-slow" },
  { src: "/image/github.png", position: "left-[48%] top-[12%]", animation: "animate-float" },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {floatingIcons.map((icon, index) => (
        <img
          key={`${icon.src}-${index}`}
          src={icon.src}
          alt=""
          className={`absolute w-[24px] opacity-[0.14] ${icon.position} ${icon.animation}`}
        />
      ))}
    </div>
  );
}
