import { $, getHint } from './utils';
import { DOM_SELECTOR, RESULT } from './constants';

class BaseballGame {
  computerInputNumbers: string;

  userInputNumbers: string;

  constructor() {
    this.computerInputNumbers = '';
    this.userInputNumbers = '';
  }

  play(computerInputNumbers: string, userInputNumbers: string) {
    if (computerInputNumbers === userInputNumbers) return RESULT.ANSWER;
    const hint = getHint(computerInputNumbers, userInputNumbers);

    return hint;
  }

  getComputerInputValue() {
    return this.computerInputNumbers;
  }

  setComputerInputValue(value: string) {
    this.computerInputNumbers = value;
  }

  getUserInputValue() {
    return this.userInputNumbers;
  }

  setUserInputValue(value: string) {
    this.userInputNumbers = value;
  }

  resetUserInputValue() {
    this.setUserInputValue('');
    ($(DOM_SELECTOR.USER_INPUT) as HTMLInputElement).value = '';
  }
}

export default BaseballGame;
