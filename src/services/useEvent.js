import { useQuery } from '@tanstack/react-query'
import { getEvents } from "./apiEvents";

export function useEvent() {
        const {isLoading, data: events, error} = useQuery({
        queryKey: ["events"],
        queryFn: getEvents
        }
      );

    return {isLoading, events, error}
}