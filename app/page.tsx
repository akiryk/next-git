import styles from "./page.module.css";
import { URLSearchParams } from "url";

type Params = URLSearchParams & {
  theme: string;
};

export default async function Home({ searchParams }: { searchParams: Params }) {
  let dynamicClass;
  switch (searchParams.theme) {
    case "red":
      dynamicClass = styles["main-red"];
      break;
    case "blue":
      dynamicClass = styles["main-blue"];
      break;
    default:
      dynamicClass = styles.main;
  }

  return (
    <main className={dynamicClass}>
      <h1>Hello!</h1>
      <p>First paragraph</p>
      <p>Second IMPORTANT paragraph</p>
      <p>Third paragraph</p>
    </main>
  );
}
