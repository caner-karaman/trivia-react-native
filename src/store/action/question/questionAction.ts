import Api from "../../../common/api";

const api = new Api();

export const questionTypes = {
  GET_QUESTIONS : '@@question/GET_QUESTIONS',
  SET_QUESTION_INDEX : '@@question/SET_QUESTION_INDEX',
  SET_SCORE : '@@question/SET_SCORE',
}

export const getQuestions: any = () => {
  return ({
    type: questionTypes.GET_QUESTIONS,
    payload: api.execute('https://opentdb.com', '/api.php?amount=10')
  })
}

export const setQuestionIndex: any = () => {
  return ({
    type: questionTypes.SET_QUESTION_INDEX,
  })
}

export const setScore: any = (addingScore: number) => {
  return ({
    type: questionTypes.SET_SCORE,
    payload: addingScore
  })
}
