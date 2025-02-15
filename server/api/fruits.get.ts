import { $fetch } from "ofetch";

export default defineEventHandler(async () => {
  try {
    return await $fetch("https://www.fruityvice.com/api/fruit/all");
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error catch data from fruityvice",
    });
  }
});
