import './largr.css';
import Radio from './larg';
export default function larger(){
    return(
        <div className='right'>
            <h2>Add Item</h2>
                <small>Create new menu item</small>
                    <Radio 
                    name="Dessert"
                    />
                    <Radio 
                    name="Main"
                    />
                    <Radio 
                    name="Appertizer"
                    />
                    <Radio 
                    name="Starter"
                    />
        </div>
    )
}