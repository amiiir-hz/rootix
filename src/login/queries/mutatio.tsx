import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "src/shared/config";
import type { User } from "./types";
import { useSnackbar } from "notistack";

const useSaveUser = ({
  onSuccess,
}: {
  onSuccess?: () => void;
} = {}) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const saveUserMutation = useMutation(
    async ({ ...restUserProperties }: User): Promise<any> => {
      const { data } = await axios.post(
        `${API_URL}/login`,
        {
          ...restUserProperties,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    },
    {
      onSuccess: async () => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: async (error, variables, context) => {
        enqueueSnackbar("Operation Failed!", { variant: `error` }),
          console.log("first", error);
      },
    }
  );

  return saveUserMutation;
};

export default useSaveUser;
