import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "src/shared/config";
import type { Swaptype, Error } from "./types";
import { useSnackbar } from "notistack";
import { ACCESS_TOKEN_KEY } from "src/shared/storage/constant";
import { getCookieStorage } from "src/shared/storage/cookie";

const useswapdataUser = ({
  onSuccess,
}: {
  onSuccess?: () => void;
} = {}) => {
  const idToken = getCookieStorage(ACCESS_TOKEN_KEY) || "token";

  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const SwapdataMutation = useMutation(
    async ({ ...restUserProperties }: Swaptype): Promise<any> => {
      const { data } = await axios.post(
        `${API_URL}/swap`,
        {
          ...restUserProperties,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      return data;
    },
    {
      onSuccess: async () => {
        // await queryClient.removeQueries('user')
        // await queryClient.removeQueries('users')
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: async (error: Error) => {
        enqueueSnackbar(`${error?.response?.data?.message}`, {
          variant: `error`,
        });
        console.log("first", error);
      },
    }
  );

  return SwapdataMutation;
};

export default useswapdataUser;
