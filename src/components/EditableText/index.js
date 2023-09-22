import {Component} from 'react'

import {
  MainBgContainer,
  Input,
  CardContainer,
  Button,
  MainHeading,
  Paragraph,
  InputAndLabelContainer,
} from './styledComponent'

class EditableText extends Component {
  state = {
    textInput: '',
    isButtonClicked: false,
  }

  onText = event => {
    this.setState({textInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {textInput, isButtonClicked} = this.state

    const ButtonText = isButtonClicked ? 'Edit' : 'Save'

    return (
      <MainBgContainer>
        <CardContainer>
          <MainHeading>Editable Text Input</MainHeading>
          <InputAndLabelContainer>
            {isButtonClicked ? (
              <Paragraph>{textInput}</Paragraph>
            ) : (
              <Input value={textInput} onChange={this.onText} type="text" />
            )}
            <Button onClick={this.onClickButton}>{ButtonText}</Button>
          </InputAndLabelContainer>
        </CardContainer>
      </MainBgContainer>
    )
  }
}

export default EditableText
