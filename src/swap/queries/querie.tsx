import axios from "axios";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { API_URL } from "src/shared/config";
import type { user } from "./types";
import { ACCESS_TOKEN_KEY } from "src/shared/storage/constant";
import { useRouter } from "next/router";
import { getCookieStorage } from "src/shared/storage/cookie";

const useSwapUser = ({
  onSuccess,
}: {
  onSuccess?: () => void;
} = {}) => {
  const idToken = getCookieStorage(ACCESS_TOKEN_KEY) || "token";
  const queryClient = useQueryClient();
  const swapUserQuery = useQuery(
    ["swapinfo"],
    async (): Promise<user> => {
      const { data } = await axios.get(`${API_URL}/swap`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });

      return data?.data;
    },
    {
      onSuccess: async () => {
        // await queryClient.removeQueries('user')
        // await queryClient.removeQueries('users')
        if (onSuccess) {
          onSuccess();
        }
      },
    }
  );

  return swapUserQuery;
};
export { useSwapUser };
