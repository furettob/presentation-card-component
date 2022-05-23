export default function Area({ title, children }) {
  return (
    <div className="pc-area">
      {title && <h3 className={"pc-area__title"}>{title}</h3>}
      {children}
    </div>
  );
}
