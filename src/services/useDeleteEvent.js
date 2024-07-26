import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteEvent as deleteEventApi} from "./apiEvents";

export function useDeleteEvent() {
    const queryClient = useQueryClient();
    const {isLoading: isDeleting, mutate: deleteEvent} = useMutation({
        mutationFn: (id) => deleteEventApi(id),
        onSuccess: () => {
          toast.success("Event successfully deleted");
    
          queryClient.invalidateQueries({
            queryKey: ["events"],
          });
        },
        onError: (err) => toast.error(err.message)
      });

    return {isDeleting, deleteEvent}
}