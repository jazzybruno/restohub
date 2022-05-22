import React, { Component } from 'react'
import './logIn.css'
import Image from '../images/logo.png'

export class addClient extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.onFocus = this.onFocus.bind(this);
    }
    
    onFocus(event) {

        const currentInputStyle = event.target;
        currentInputStyle.style.leftpadding = "1px";
        currentInputStyle.style.borderColor = "grey";
    }
  render() {
    return (
      <div className='p-container'>
            <img className='image' src={Image} alt='restohub logo' />
            <div className='p-form-container'>
                <form action='/clients'>
                    <h1 className='head text-4xl font-bold text-center mt-5'>Client</h1>
                    <div className='input-label-div'>   
                        <label className='big'>Name</label>
                        <input type="text" onFocus={this.onFocus}/>
                    </div>
                    <div className='input-label-div'>
                        <label className='big'>Representative</label>
                        <input type="text" onFocus={this.onFocus}/>
                    </div>
                    <div className='grouped-inputs'>
                        <div className='first-two'>
                            <div className='input-label-div'>
                                <label>Date</label>
                                <input type="date" onFocus={this.onFocus}/>
                            </div>
                            <div className='input-label-div'>                    
                                <label >Address</label>
                                <input type="text" onFocus={this.onFocus}/>
                            </div>
                        </div>
                        <div className='second-two'>
                            <div className='input-label-div'>
                                <label >Category</label>
                                <input type="text" onFocus={this.onFocus}/>
                            </div>
                            <div className='input-label-div'>                    
                                <label>Phone</label>
                                <input type="number" onFocus={this.onFocus}/>
                            </div>
                        </div>
                    </div>
                    <div className='input-label-div'>
                        <label className='big'>Email</label>
                        <input type="email" onFocus={this.onFocus}/>
                    </div>
                    <div className='input-label-div'>
                        <label className='big'>Bank account</label>
                        <input type="text" onFocus={this.onFocus}/>
                    </div>
                    <button type="submit">Add Client</button>
                </form>
            </div>
      </div>
    );
  }
}

export default addClient
