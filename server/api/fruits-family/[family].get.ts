import { $fetch } from "ofetch";

export default defineEventHandler(async (event) => {
  const family = getRouterParam(event, "family");
  if (!family) {
    throw createError({
      statusCode: 400,
      statusMessage: "family is required",
    });
  }

  try {
    return await $fetch(
      `https://www.fruityvice.com/api/fruit/family/${family}`,
    );
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error catch data from fruityvice",
    });
  }
});
