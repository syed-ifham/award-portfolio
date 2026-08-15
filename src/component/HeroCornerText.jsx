export default function HeroCornerText({ textColor, zIndex = "" }) {
  return (
    <h1
      className={`special-font hero-heading absolute bottom-5 right-5 ${zIndex} ${textColor}`}
    >
      <b>ft.IFHAM</b>
    </h1>
  );
}