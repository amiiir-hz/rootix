// import Head from "next/head";
// import Image from "next/image";
import styles from "src/styles/Home.module.css";
import Head from "next/head";
import Dashboard from "src/components/dashboard";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>rootix</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}
