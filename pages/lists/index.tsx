import React,{useEffect,useContext} from 'react'
import { useUserLoginOrNot } from "src/shared/auth/useRedirectOnToken";
import Userrole from "src/shared/hooks/userrole";
import { useRouter } from "next/router";
import Authorized from "@/src/shared/components/layout/Authorized";
import { LangContext } from "src/shared/context/LanguageContext";
import Transaction from '@/src/transaction'
type Props = {}

export default function index({}: Props) {
  useUserLoginOrNot();
  const [role] = Userrole();
  const router = useRouter();
  const {
    dispatch: { translate },
  } = useContext(LangContext);
  useEffect(() => {
    if (role === "admin") {
      router.push("/login");
    }
  }, [role]);
  return (
    <Authorized translate={translate}>
      <Transaction translate={translate} />
    </Authorized>
  )
}