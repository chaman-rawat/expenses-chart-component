import MyBalance from './components/MyBalance'
import Expenses from './components/Expenses/Expenses'
import expenseData from './data.json';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <MyBalance></MyBalance>
      <Expenses data={expenseData}></Expenses>
    </div>
  );
}

export default App;
