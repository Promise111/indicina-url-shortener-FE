import style from "./Loader.module.css";

export function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div className={style["loader"]}></div>
    </div>
  );
}
