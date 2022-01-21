import React, { Component } from 'react'
import IsoTransfer from '../Transfer'
import IsoTreeSelect from '../TreeSelect'
import IsoUpload from '../Upload'
import IsoCheckbox from '../Checkbox'
import IsoAutocomplete from '../AutoComplete'
import IsoRadiobox from '../Radiobox'
import IsoSelectBox from '../Select'
import IsoMentions from '../Mention'
import IsoSlider from '../Slider'
import InputField from '../Input'

export default class extends Component {
  render() {
    return (
      <div>
        <InputField />
        <IsoAutocomplete />
        <IsoCheckbox />
        <IsoUpload />
        <IsoSelectBox />
        <br />
        <IsoTreeSelect />
        <IsoMentions />
        <IsoRadiobox />
        <br />
        <IsoSlider />
        <IsoTransfer />
      </div>
    )
  }
}
