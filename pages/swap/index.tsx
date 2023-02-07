import React, { useContext, useEffect } from "react";
import Swap from "src/swap";
import { LangContext } from "src/shared/context/LanguageContext";
import Authorized from "@/src/shared/components/layout/Authorized";
import { useUserLoginOrNot } from "src/shared/auth/useRedirectOnToken";
import Userrole from "src/shared/hooks/userrole";
import { useRouter } from "next/router";
import { getCookieStorage } from "src/shared/storage/cookie";
import { ACCESS_TOKEN_KEY, USER_ROLE } from "src/shared/storage/constant";
type Props = {};

export default function index({}: Props) {
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  useUserLoginOrNot();
  const [role] = Userrole();
  const router = useRouter();

  useEffect(() => {
    if (role === "admin") {
      router.push("/login");
    }
  }, [role]);

  return (
    <Authorized translate={translate}>
      <Swap translate={translate} />
    </Authorized>
  );
}
