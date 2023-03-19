import { useState, useEffect } from "react";
import { IUser } from "types/interfaces";
import { getUser } from 'utils/restClient'
import type { NextPage } from "next";
import Router from 'next/router'
import { useRouter } from "next/router";

import { Sun } from "components/core/layout/sun/sun";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";
import { useToken } from 'lib/hooks';
import { getFormattedDate } from 'utils/dateHelpers'

const UserPage: NextPage = () => {
  const { token, setToken } = useToken();

  const [userData, setUserData] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { asPath } = router;
  const username = asPath.substring(asPath.lastIndexOf("/") + 1);

  useEffect(() => {
    if (!token) {
      Router.push('/sign-in')
      }
  }, [token]);

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true)

    getUser({property: 'username', value: username})
      .then((res) => setUserData(res))
      .then(() => {
        setLoading(false)
      })
  }, [router, username]);

  if (isLoading) return <LoadingSpinner />;

  if (!userData) {
    return <p>No User Data</p>;
  } else {
    return (
      <div className={styles.Container}>
        <Sun color={"sun-peach"} />
        <p>username: {userData.username}</p>
        <p>createdAt: {getFormattedDate(userData.createdAt)}</p>
      </div>
    );
  }
};

export default UserPage;
