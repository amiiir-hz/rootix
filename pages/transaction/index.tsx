import React,{useEffect,useContext} from 'react'
import { useUserLoginOrNot } from "src/shared/auth/useRedirectOnToken";
import Userrole from "src/shared/hooks/userrole";
import { useRouter } from "next/router";
type Props = {}

export default function index({}: Props) {
  useUserLoginOrNot();
  const [role] = Userrole();
  const router = useRouter();

  useEffect(() => {
    if (role === "admin") {
      router.push("/login");
    }
  }, [role]);
  return (
    <div>index</div>
  )
}