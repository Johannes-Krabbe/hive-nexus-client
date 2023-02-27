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
  const { asPath } = router;
  const username = asPath.substring(asPath.lastIndexOf("/") + 1);

  useEffect(() => {
    if (!router.isReady) return;
    async function fetchData() {
      const res = await request.get(`/user/one?username=${username}`);

      console.log("qqwfpqw", res);
      console.log(`userData received: ${JSON.stringify(res)}`);
      setUserData(res.data.data);
      setLoading(false);
    }

    fetchData();
  }, [router, username]);

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
