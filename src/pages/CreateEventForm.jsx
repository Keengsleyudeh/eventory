
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Textarea from "../ui/Textarea";
import Input from "../ui/Input";
// import { useForm } from "@tanstack/react-form";
import { createEvent } from "../services/apiEvents";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


 function CreateEventForm() {

  const {register, handleSubmit, reset, getValues, formState} = useForm();
  
  // const {errors} = formState;
  // console.log(errors)

  const queryClient = useQueryClient();

  const {mutate, isLoading: isCreating} = useMutation({

    mutationFn: createEvent,
    onSuccess: ()=> {
      toast.success("New cabin successfully created")
      queryClient.invalidateQueries({queryKey: ["events"]})
      reset()
    },
    onError: (err) => toast.error(err.message)
  });



  function onSubmit(data) {
    // await mutate({...data, image: data.image[0]});
    console.log(data)
    mutate(data)

  };


  // function onError(error) {
  //   // console.log(error)
  // }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    {/* // <Form> */}
      <FormRow label="Cabin name" error="error">
        <Input type="text" id="event_name" {...register("event_name")}/>
      </FormRow>

      <FormRow label="Cabin name" error="error">
        <Input type="text" id="location" {...register("location")}/>
      </FormRow>

      <FormRow label="Cabin name" error="error">
        <Input type="text" id="duration" {...register}/>
      </FormRow>

      <FormRow label="Cabin name" error="error">
        <Input type="date" id="start_date" {...register("start_date")}/>
      </FormRow>


      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>

    </Form >
    )
  }

  export default CreateEventForm;
