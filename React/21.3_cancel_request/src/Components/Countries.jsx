import axios from "axios";
import {Component} from "react";

export class Countries extends Component {
   state = {
      data: null,
      error: null,
      inputValue: "",
      filterdData: null,
      isLoading: false,
      show: false,
      abortController: new AbortController(),
   };
   componentDidMount() {
      const fetchData = async () => {
         this.setState({isLoading: true});
         try {
            let signal = this.state.abortController.signal;
            const {data} = await axios.get("https://restcountries.com/v2/all", {
               signal: signal,
            });
            this.setState({data: data});
            this.setState({filterdData: data});
         } catch (err) {
            this.setState({error: err});
         }
         this.setState({isLoading: false});
      };
      console.log(this.state.data);
      fetchData();
   }
   componentDidUpdate(prevProps, prevState) {
      setTimeout(() => {
         if (prevState.inputValue !== this.state.inputValue) {
            this.setState({
               filterdData: this.state.filterdData.filter((country) =>
                  country.name
                     .toLowerCase()
                     .includes(this.state.inputValue.toLowerCase())
               ),
            });
         } else if (!this.state.inputValue) {
            return this.setState({filterdData: this.state.data});
         }
      }, 500);
   }
   componentWillUnmount() {
      this.state.abortController.abort();
   }
   render() {
      return (
         <div>
            Countries
            <input
               value={this.state.inputValue}
               type="text"
               onChange={({target: {value}}) =>
                  this.setState({inputValue: value})
               }
            />
            <button onClick={() => this.setState({inputValue: ""})}>
               Empty Input
            </button>
            <button
               onClick={() =>
                  this.setState((prev) => {
                     return {show: !prev.show};
                  })
               }>
               show
            </button>
            {this.state.show && (
               <ul>
                  {this.state.data &&
                     this.state.filterdData.map(({name}) => {
                        return <li key={name}>{name}</li>;
                     })}
               </ul>
            )}
            {this.state.isLoading && <h2>Spinner</h2>}
         </div>
      );
   }
}

export default Countries;
