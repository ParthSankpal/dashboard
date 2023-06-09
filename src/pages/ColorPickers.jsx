import React from 'react';
import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs';
import {Header}  from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const change= (args)=>{
  document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
}

const ColorPickers = () => {
  const {currentMode}= useStateContext();
  return (
    <div  className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Header category="App" title="Color Picker"/>
      <div className='text-center'>
        <div id='preview'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-sembold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent id='inline-pallete' mode="Palette" modeSwitcher={false}  inline showButtons={false} change={change}/>
            
          </div>
          <div>
            <p className='text-2xl font-sembold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent id='inline-picker' mode="Picker" modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ColorPickers