import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Router from 'next/router'
import { useRouter } from "next/router";

import { Sun } from "components/core/layout/sun/sun";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";
import { request } from "utils/context";
import { useToken } from 'lib/hooks';

const UserPage: NextPage = () => {
  const { token, setToken } = useToken();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const { asPath } = router;
  const username = asPath.substring(asPath.lastIndexOf("/") + 1);

  async function fetchData() {
    const res = await request.get(`/user/one?username=${username}`);

    console.log("API response:", res);
    console.log(`userData received: ${JSON.stringify(res.data.data)}`);
    setUserData(res.data.data);
    setLoading(false);
  }

  useEffect(() => {
    if (!token) {
      Router.push('/sign-in')
      }
  }, [token]);

  useEffect(() => {
    if (!router.isReady) return;

    fetchData();
  }, [router, username]);

  if (isLoading) return <LoadingSpinner />;
  if (!userData) {
    return <p>No User Data</p>;
  } else {
    return (
      <div className={styles.Container}>
        <Sun color={"sun-peach"} />
        <p>username: {userData.username}</p>
        <p>createdAt: {userData.createdAt}</p>
      </div>
    );
  }
};

export default UserPage;
