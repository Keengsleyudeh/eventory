
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
// import { useForm } from "@tanstack/react-form";
import { createEvent } from "../services/apiEvents";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Header from "../ui/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

const StyledBody = styled.div`
  // transform: scale(0.
`


 function CreateEventForm() {

  const {register, handleSubmit, reset, getValues, formState} = useForm();
  const {errors} = formState;
  
  // const {errors} = formState;
  // console.log(errors)

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate, isLoading: isCreating} = useMutation({

    mutationFn: createEvent,
    onSuccess: ()=> {
      toast.success("New cabin successfully created")
      queryClient.invalidateQueries({queryKey: ["events"]})
      reset()
      navigate("/")
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

  if (isCreating) return <Spinner />
  
  return (
    <>
      <Header />
      <StyledBody>

        <Form onSubmit={handleSubmit(onSubmit)}>
        {/* // <Form> */}
          <FormRow label="Event name" error={errors?.event_name?.message}>
            <Input type="text" id="event_name" {...register("event_name", {
              required: "This field is required"
            })}/>
          </FormRow>

          <FormRow label="Location" error={errors?.location?.message}>
            <Input type="text" id="location" {...register("location", {
              required: "This field is required"
            })}/>
          </FormRow>

          <FormRow label="Duration" error={errors?.duration?.message}>
            <Input type="text" id="duration" {...register("duration", {
              required: "This field is required"
            })}/>
          </FormRow>

          <FormRow label="Date" error={errors?.start_date?.message}>
            <Input type="date" id="start_date" {...register("start_date", {
              required: "This field is required"
            })}/>
          </FormRow>


          <FormRow>
            {/* type is an HTML attribute! */}
            <Button variation="secondary" type="reset">
              Cancel
            </Button>
            <Button disabled={isCreating}>Add cabin</Button>
          </FormRow>

        </Form >
      </StyledBody>
    </>
    )
  }

  export default CreateEventForm;
