import { _saveQuestion, _saveQuestionAnswer, _getUsers } from './_DATA';

describe('_saveQuestion', () => {
    it('will return saved question and all expected fields', async() => {
        const data = {
            optionOneText: 'option one text',
            optionTwoText: 'option two text',
            author: 'author',
        };

        const result = await _saveQuestion(data);

        expect(result).toBeTruthy();
    });

    it('will return an error if incorrect data is passed', async() => {
        const data = {
            optionOneText: null,
            optionTwoText: null,
            author: null,
        };

        try {
          await _saveQuestion(data);
        } 
        catch (error) {
          expect(error).toMatch("Please provide optionOneText, optionTwoText, and author");
        }
    });
});

describe('_saveQuestionAnswer', () => {
    it('will return true when correctly formatted data is passed', async() => {
        const data = {
            authedUser: 'tylermcginnis',
            qid: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne',
        };

        const result = await _saveQuestionAnswer(data);

        expect(result).toBeTruthy();
    });

    it('will return an error if incorrect data is passed', async() => {
        const data = {
            authedUser: null,
            qid: null,
            answer: null,
        };

        try {
          await _saveQuestionAnswer(data);
        } 
        catch (error) {
          expect(error).toMatch("Please provide authedUser, qid, and answer");
        }
    });
});