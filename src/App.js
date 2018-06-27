import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(); 
    this.state = { 
      currentInput: '',
      answerDisplay: 'Enter a number to find out how long it takes to find it in the given data. Binary search will sort the data for you before trying. ',
      data: [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2 , 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9 , 70, 81, 27, 97, 82, 6 , 88, 3 , 7 , 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1 , 6 , 7 , 64, 43, 9 , 73, 80, 98, 46, 27, 22, 87, 49, 83, 6 , 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5 ]
    }  
  }

  handleChange(e) {
    this.setState({currentInput: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    console.log(e.target);
  }

  linearSearch(){
    let input = Number(this.state.currentInput);
    let counter = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      const element = this.state.data[i];
      counter++;
      if(element === input){
        return this.setState({
          answerDisplay: `Linear Search looped ${counter} times through the data to find your number`
        })  
      }
    }
    return this.setState({
      answerDisplay: `Your number is not in the data set! Choose a number that is there!`
    })     
  }

  sortArray(){
    let array = this.state.data.sort();
    array = array.sort((a, b) => a - b);
    this.binarySearch(array);
  }

  binarySearch(array, start, end, counter=1){
    start = start === undefined ? 0 : start;
    end = end === undefined ? this.state.data.length : end;
    let userValue = Number(this.state.currentInput);

    if(!array.includes(userValue)){
      return this.setState({
        answerDisplay: `number not in array.`
      }) 
    }
    if(start > end){
      return this.setState({
        answerDisplay: `Array is not set up`
      }) 
    }    
    let middleNum = Math.floor((start + end) / 2);
    let currentIteration = array[middleNum];
    // console.log('array: ',array);
    // console.log('start: ',start);
    // console.log('end: ',end);
    // console.log('middleNum: ',middleNum);
    // console.log('currentIteration: ',currentIteration);
    // console.log('userValue: ',userValue);
    // console.log('counter: ',counter);

    if (currentIteration === userValue){
      return this.setState({
        answerDisplay: `Found your number after ${counter} tries!`
      }) 
    } else if (currentIteration < userValue){
      return this.binarySearch(array, middleNum + 1, end, counter+1);
    } else if (currentIteration > userValue){
      return this.binarySearch(array, start, middleNum -1, counter+1);
    };
  }

  render() {
    return (
      <div className="App">
      <h1>Which Find it Faster?!</h1>
      <form onSubmit={(e)=> this.onSubmit(e)}>
        <input 
        type="number" 
        name="inputnumber"
        className="userinput" 
        placeholder="Enter number here..." 
        value={this.state.currentInput}
        onChange={(e) => this.handleChange(e)}
        />
        <button className='linearbutton' onClick={() => this.linearSearch()}>Linear Search</button>
        <button className='binarybutton' onClick={() => this.sortArray()}>Binary Search</button>
      </form>
      {this.state.answerDisplay}
        <p>Here is the data:</p>
        <p className='dataparagraph'>[ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2 , 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9 , 70, 81, 27, 97, 82, 6 , 88, 3 , 7 , 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1 , 6 , 7 , 64, 43, 9 , 73, 80, 98, 46, 27, 22, 87, 49, 83, 6 , 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5 ]</p>
        <p></p>
      </div>
    );
  }
}

export default App;
