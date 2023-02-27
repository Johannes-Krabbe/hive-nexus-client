import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Sun } from "components/core/layout/sun/sun";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";
import { request } from "utils/context";

const UserPage: NextPage = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const username = router.query.username;

  useEffect(() => {
    if (!router.isReady) return;
    async function fetchData() {
      const res = await request.get(`/user/one?username=${username}`);

    // const queryUrl = `https://dummyjson.com/users/${username}`
    const queryUrl = `http://localhost:3001/user?username=${username}`

    console.log(`fetching username: ${username}`)
    console.log(`query: ${queryUrl}`)

    fetch(queryUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(`userData received: ${JSON.stringify(data)}`)
        setUserData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('request failed', err)
      })
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!userData) {
    return <p>No User Data</p>;
  } else {
    return (
      <div className={styles.Container}>
        <Sun color={"sun-peach"} />
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
};

export default UserPage;
