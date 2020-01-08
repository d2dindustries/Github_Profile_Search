export async function resolve(promise) {
  const resObj = { error: null, data: null };

  try {
    resObj.data = await promise;
  } catch(error) {
    resObj.error = error;
  }

  return resObj;
}