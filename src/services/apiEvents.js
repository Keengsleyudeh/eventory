import supabase, { supabaseUrl } from "./supabase";
//To get events from database (supabase)
export async function getEvents() {
    const { data, error } = await supabase
    .from('events')
    .select('*');

    if (error) {
        console.error(error)
        throw new Error("events could not be loaded");
    }

    return data;
};

//To create new event
export async function createEvent(newEvent, id) {
let query = supabase.from("events");


if (!id) query = query.insert([newEvent])
const {data, error} = await query.select().single()

if (error) {
    console.error(error)
    throw new Error("Event could not be created");
}

return data;
}

//To delete event
export async function deleteEvent(id) {

    const { data, error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

    if (error) {
        console.error(error)
        throw new Error("Events could not be deleted");
    }

    return data;
};




