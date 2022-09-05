import styles from "./tool.module.scss";
import c from "classnames";
import Link from "next/link";

const Tool = (props) => {
  const { data } = props;

  return (
    <Link href={data.link}>
      <a
        className={c(styles.Container, styles[data.hoverColor.title])}
        target="_blank"
      >
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.9981 0H0V14.9333H30.262L0.000109545 45.1966L10.5592 55.7561L41.0672 25.2467V56H56L56 2.79278e-06L55.9981 0Z"
              fill="#E8EBEE"
            />
          </svg>
        </div>
      </a>
    </Link>
  );
};

export default Tool;
