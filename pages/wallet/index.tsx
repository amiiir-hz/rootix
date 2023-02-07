import React, { useContext, useEffect } from "react";
import Wallet from "src/wallet";
import { LangContext } from "src/shared/context/LanguageContext";
import Authorized from "@/src/shared/components/layout/Authorized";
import { useUserLoginOrNot } from "src/shared/auth/useRedirectOnToken";
import Userrole from "src/shared/hooks/userrole";
import { useRouter } from "next/router";
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
      <Wallet translate={translate} />
    </Authorized>
  );
}
