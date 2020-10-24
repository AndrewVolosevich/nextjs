import { observer } from "mobx-react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { userStore } from "../stores";
import { Skeleton } from "@material-ui/lab";
import InitLoader from "../components/init-loader";

function setTimeoutPromise(delay: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function Initialization(props: { children: ReactNode }) {
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();

  const redirectFromBlockPage = async () => {
    const { route } = router;
    const { isAuth } = userStore;
    if (isAuth && ["/auth", "/recover"].some((e) => e === route)) {
      await router.replace("/");
    } else if (!isAuth && ["/cart", "/auth"].some((e) => e === route)) {
      await router.replace("/auth");
    }
  };

  useEffect(() => {
    Promise.all([userStore.getFromStorage(), setTimeoutPromise(1000)])
      .then(() => {
        setIsInit(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (isInit) {
      redirectFromBlockPage();
    }
  }, [router.route, userStore.isAuth]);

  return <>{isInit ? props.children : <InitLoader />}</>;
}

export default observer(Initialization);
