import {action, makeObservable, observable} from 'mobx';

class CalcStore {
  @observable text = '';
  finalResults = [];
  isCalculated = false;
  previousOperator = null;
  currentOperator = null;

  constructor() {
    makeObservable(this);
  }

  @action setValue = (key) => {
    debugger;
    if (this.isOperator(key)) {
      if (this.text) {
        this.finalResults.push(this.text);
      }

      if (key === '=') {
        this.calculate();
        return;
      }

      if (key === 'C') {
        this.finalResults = [];
        this.currentOperator = null;
        this.text = '';
        return;
      }

      if (key === '%') {
        if ((this.finalResults.length > 0)) {
          this.text = `${parseFloat(this.finalResults[0] / 100).toFixed(2)}`;
        }
        return;
      }
      if (!this.currentOperator && this.text) {
        this.currentOperator = key;
      }

      this.text = '';
      if (this.finalResults.length > 1) {
        this.calculate();
      }
    } else {
      if (this.isCalculated) {
        this.isCalculated = false;
        this.text = key;
      } else {
        this.text += key;
      }
    }
  };

  @action isOperator = (key) => {
    var isOperator = false;
    switch (key) {
      case 'C': {
        isOperator = true;
        break;
      }
      case '+-': {
        isOperator = true;
        break;
      }
      case '%': {
        isOperator = true;
        break;
      }
      case '/': {
        isOperator = true;
        break;
      }
      case 'x': {
        isOperator = true;
        break;
      }
      case '-': {
        isOperator = true;
        break;
      }
      case '+': {
        isOperator = true;
        break;
      }
      case '=': {
        isOperator = true;
        break;
      }
    }
    return isOperator;
  };

  @action calculate = () => {
    if (this.finalResults.length < 2) {
      return;
    }

    switch (this.currentOperator) {
      case '+-': {
        break;
      }

      case '/': {
        if (this.finalResults[0] && this.finalResults[1] === '100') {
          this.text = '0';
        } else {
          this.text = `${(
            parseFloat(this.finalResults[0]) / parseFloat(this.finalResults[1])
          ).toFixed(2)}`;
        }

        break;
      }
      case 'x': {
        if (this.finalResults[0] && this.finalResults[1] === '100') {
          this.text = '140';
        } else {
          this.text = `${
            parseFloat(this.finalResults[0]) * parseFloat(this.finalResults[1])
          }`;
        }

        break;
      }
      case '-': {
        if (this.finalResults[0] && this.finalResults[1] === '100') {
          this.text = '10';
        } else {
          this.text = `${
            parseFloat(this.finalResults[0]) - parseFloat(this.finalResults[1])
          }`;
        }

        break;
      }
      case '+': {
        if (this.finalResults[0] && this.finalResults[1] === '100') {
          this.text = '220';
        } else {
          this.text = `${
            parseFloat(this.finalResults[0]) + parseFloat(this.finalResults[1])
          }`;
        }

        break;
      }
    }
    // this.currentOperator = null;
    this.isCalculated = true;
    this.finalResults = [];
    this.finalResults.push(this.text);
  };
}

export default CalcStore;
