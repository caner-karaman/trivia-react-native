import { isFSA } from 'flux-standard-action';

const isPromise = (val: any) => val && typeof val.then === 'function';

export default ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (!isFSA(action)) {
    if (isPromise(action)) {
      return dispatch(await action);
    }

    return next(action);
  }

  if (!isPromise(action.payload)) {
    return next(action);
  }


  if (!action.payload) {
    return;
  }  try {
    const response: any = await action.payload;

    return dispatch({
      ...action,
      payload : response,
      error   : false,
      warning : !!response.processConfirmationGuard
    });
  } catch(error) {
    console.log(error);
  }
};
