import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Failed to fetch data");
  }
  return cabins;
}

export async function createCabin(formData) {
  const hasImageAlready = formData.image?.startsWith?.(supabaseUrl);
  const id = formData.id;
  const imageFile = formData.image[0];
  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");

  const imageUrl = `https://qcjkfgriuhscqlxvefbo.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert(hasImageAlready ? [formData] : [{ ...formData, image: imageUrl }])
    .select();
  if (error) {
    throw new Error("Failed to create a cabin");
  }
  if (!hasImageAlready) {
    await uploadImage(imageName, imageFile, id);
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Failed to delete a cabin");
  }
}
async function uploadImage(imageName, imageFile, id) {
  const { error } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, imageFile);
  if (error) {
    await supabase.from("cabins").delete().eq("id", id);
    console.error(error);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
}

export async function editCabin(formData) {
  const hasImageAlready = formData.image?.startsWith?.(supabaseUrl);
  const id = formData.id;
  const imageFile = formData.image[0];
  const imageName = `${Math.random()}-${imageFile.name}`;

  const imageUrl = `https://qcjkfgriuhscqlxvefbo.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .update(hasImageAlready ? formData : { ...formData, image: imageUrl })
    .eq("id", id)
    .select();
  if (error) {
    throw new Error("Could not edit cabin");
  }
  if (!hasImageAlready) {
    await uploadImage(imageName, imageFile, id);
  }
}
