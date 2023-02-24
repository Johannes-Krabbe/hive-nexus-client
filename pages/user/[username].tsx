import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Sun } from "components/core/layout/sun/sun";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";

const UserPage: NextPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const { asPath } = router;
  const username = asPath.substring(asPath.lastIndexOf("/") + 1);

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`https://dummyjson.com/users/${username}`)
    // fetch(`http://localhost:3001/user?username=${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`userData received: ${JSON.stringify(data)}`)
        setUserData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('request failed', err)
      })
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!userData) return <p>No User Data</p>;

  return (
    <div className={styles.Container}>
      <Sun color={"sun-peach"} />
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserPage;
