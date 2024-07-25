import { useQuery } from '@tanstack/react-query'
import { getEvents } from "./apiEvents";

export function useEvent() {
        const {isLoading, data: events, error} = useQuery({
        queryKey: ["events"],
        queryFn: getEvents
        }
      );
      // data.map((data)=>{
      //   return({

          
      //     createAt: data.create_at, 
      //     name: data.event_name,
      //     location,
      //     duration
      //   }
          
      //   )
      // })

    return {isLoading, events, error}
}